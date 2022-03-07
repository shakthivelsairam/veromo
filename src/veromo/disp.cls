/// veromo Dispatch Class
Class veromo.disp Extends %CSP.REST
{

/// Default the Content-Type for this application.
Parameter CONTENTTYPE = "application/json";

/// By default convert the input stream to Unicode
Parameter CONVERTINPUTSTREAM = 1;

/// Description
XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>
    
    <Route Url="/country/:id" Method="get" Call="get-country-id" />

</Routes>
}

ClassMethod "get-country-id"(id As %String) As %Status
{
    Try {
        Do ##class(%REST.Impl).%SetContentType("application/json")
        If '##class(%REST.Impl).%CheckAccepts("application/json") Do ##class(%REST.Impl).%ReportRESTError(..#HTTP406NOTACCEPTABLE,$$$ERROR($$$RESTBadAccepts)) Quit
        Set response=##class(veromo.impl)."get-country-id"(id)
               
        Do ##class(veromo.impl).%WriteResponse(response)
    } Catch (ex) {
        Do ##class(%REST.Impl).%ReportRESTError(..#HTTP500INTERNALSERVERERROR,ex.AsStatus(),$parameter("veromo.impl","ExposeServerExceptions"))
    }
    Quit $$$OK
    
    Quit $$$OK
}

}
