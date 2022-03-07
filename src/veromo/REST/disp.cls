/// veromo Dispatch Class
Class veromo.REST.disp Extends %REST.disp
{

/// Default the Content-Type for this application.
Parameter CONTENTTYPE = "application/json";

/// By default convert the input stream to Unicode
Parameter CONVERTINPUTSTREAM = 1;

/// Description
XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>
    
    <Route Url="/initial.js" Method="GET" Call="initialDataAction" />
    <Route Url="/test" Method="GET" Call="initialDataAction" />
    <Route Url="/name-finder" Method="GET" Call="nameFinderAction" />
    <Route Url="/name-finder" Method="POST" Call="postnameFinderAction" />

</Routes>
}

ClassMethod initialDataAction() As %Status
{
    Try {
        Do ##class(%REST.Impl).%SetContentType("application/json")
        If '##class(%REST.Impl).%CheckAccepts("application/json") Do ##class(%REST.Impl).%ReportRESTError(..#HTTP406NOTACCEPTABLE,$$$ERROR($$$RESTBadAccepts)) Quit
        Set response=##class(veromo.REST.impl).initialDataAction()
               
        Do ##class(veromo.REST.impl).%WriteResponse(response)
    } Catch (ex) {
        Do ##class(%REST.Impl).%ReportRESTError(..#HTTP500INTERNALSERVERERROR,ex.AsStatus(),$parameter("veromo.REST.impl","ExposeServerExceptions"))
    }
    Quit $$$OK
    
    Quit $$$OK
}

ClassMethod nameFinderAction() As %Status
{
    Try {
        Do ##class(%REST.Impl).%SetContentType("application/json")
        If '##class(%REST.Impl).%CheckAccepts("application/json") Do ##class(%REST.Impl).%ReportRESTError(..#HTTP406NOTACCEPTABLE,$$$ERROR($$$RESTBadAccepts)) Quit
        Set response=##class(veromo.REST.impl).nameFinderAction()
               
        Do ##class(veromo.REST.impl).%WriteResponse(response)
    } Catch (ex) {
        Do ##class(%REST.Impl).%ReportRESTError(..#HTTP500INTERNALSERVERERROR,ex.AsStatus(),$parameter("veromo.REST.impl","ExposeServerExceptions"))
    }
    Quit $$$OK
    
    Quit $$$OK
}

ClassMethod postnameFinderAction() As %Status
{
    Try {
        Do ##class(%REST.Impl).%SetContentType("application/json")
        If '##class(%REST.Impl).%CheckAccepts("application/json") Do ##class(%REST.Impl).%ReportRESTError(..#HTTP406NOTACCEPTABLE,$$$ERROR($$$RESTBadAccepts)) Quit
        If $isobject(%request.Content) Set pdata=%request.Content
        //kill ^AAAPETE
        //set ^AAAPETE($Now(),"obj") = pdata
        //set ^AAAPETE($Now(),"str") = pdata.Read()
        Set response=##class(veromo.REST.impl).nameFinderAction(.pdata)
               
        Do ##class(veromo.REST.impl).%WriteResponse(response)
    } Catch (ex) {
        Do ##class(%REST.Impl).%ReportRESTError(..#HTTP500INTERNALSERVERERROR,ex.AsStatus(),$parameter("veromo.REST.impl","ExposeServerExceptions"))
    }
    Quit $$$OK
}

}
