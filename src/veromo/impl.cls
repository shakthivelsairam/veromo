/// Implementation
Class veromo.impl Extends %REST.Impl [ ProcedureBlock ]
{

Parameter ExposeServerExceptions = 0;

ClassMethod "get-country-id"(id As %String) As %DynamicObject
{
    set retval = {}
    
    Do ..%SetStatusCode(200)
    
    try {
        set retval = ##class(veromo.country).GetItem(id)

        //set retval = $CLASSMETHOD("veromo.country","GetItem", id)
    } 
    catch ex
    {
        set retval.error = ex.DisplayString()
    }
    QUIT retval
}

}
