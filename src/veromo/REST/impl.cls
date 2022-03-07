/// Implementation
Class veromo.REST.impl Extends %REST.Impl [ ProcedureBlock ]
{

Parameter ExposeServerExceptions = 0;

ClassMethod initialDataAction() As %DynamicObject
{
    set retval = {}
    
    Do ..%SetStatusCode(200)
    
    try {
        set id = 1

        // add master

        set accounts = {}

        set master = [] //##class(veromo.useraccount).findUserAccountsComplete(id)
        set accounts.master = master
        // add incomplete
        set incomplete = [] //##class(veromo.useraccount).findUserAccountsInComplete(id)
        set accounts.incomplete = incomplete

        // add complete
        set complete = ##class(veromo.useraccount).findUserAccountsComplete(id)
        set accounts.complete = complete

        set retval.accounts = accounts
        //set retval = $CLASSMETHOD("veromo.country","GetItem", id)
    } 
    catch ex
    {
        set retval.error = ex.DisplayString()
    }
    QUIT retval
}

ClassMethod nameFinderAction(data As %Stream.Object) As %DynamicObject
{
    set retval = {}
    
    Do ..%SetStatusCode(200)
    
    try {

        set obj = {}
        //set ^AAAPETE($Now(),"2.obj") = data
        set jsonStr = data.Read()
        //set ^AAAPETE($Now(),"2.json") = {}.%FromJSON(jsonStr)

        set obj = {}.%FromJSON(jsonStr)

        set retval.name = obj.name
        set retval.status = {}
        set retval.objects = []
        //set sdata = data.Read()
        //set retval = sdata.%FromJSON()
        //set retval.name = data.name        
        // Call NameFinder Service
        // Return if Name is Available or Not

        return retval
    } 
    catch ex
    {
        set retval.error = ex.DisplayString()
    }
    QUIT retval
}

}
