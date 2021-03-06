/// 
Class veromo.country Extends (%Persistent, %JSON.Adaptor) [ ClassType = persistent, DdlAllowed, Final, Owner = {SuperUser}, ProcedureBlock, SqlRowIdPrivate, SqlTableName = country ]
{

Property id As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 2 ];

Property geonameid As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 3, SqlFieldName = geoname_id ];

Property name As %Library.String(MAXLEN = 255) [ Required, SqlColumnNumber = 4 ];

Property iso2 As %Library.String(MAXLEN = 2) [ Required, SqlColumnNumber = 5 ];

Property iso3 As %Library.String(MAXLEN = 3) [ Required, SqlColumnNumber = 6 ];

Property isono As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 7, SqlFieldName = iso_no ];

Property fips As %Library.String(MAXLEN = 2) [ SqlColumnNumber = 8 ];

Property continent As %Library.String(MAXLEN = 2) [ Required, SqlColumnNumber = 9 ];

Property tld As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 10 ];

Property currencycode As %Library.String(MAXLEN = 3) [ SqlColumnNumber = 11, SqlFieldName = currency_code ];

Property currencyname As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 12, SqlFieldName = currency_name ];

Property pcodeformat As %Library.String(MAXLEN = 255) [ SqlColumnNumber = 13, SqlFieldName = pcode_format ];

Property pcoderegex As %Library.String(MAXLEN = 255) [ SqlColumnNumber = 14, SqlFieldName = pcode_regex ];

Property top As %Library.Boolean [ Required, SqlColumnNumber = 15 ];

Parameter USEEXTENTSET = 1;

/// Bitmap Extent Index auto-generated by DDL CREATE TABLE statement.  Do not edit the SqlName of this index.
Index DDLBEIndex [ Extent, SqlName = "%%DDLBEIndex", Type = bitmap ];

/// DDL Primary Key Specification
Index PRIMARY On id [ PrimaryKey, Type = index, Unique ];

ClassMethod GetItem(id As %BigInt) As %Library.DynamicObject
{
 set retval = {}
 try {
     set oo = ..%OpenId(id)
     set sc = oo.%JSONExportToString(.retval)
 } catch ex
 {
     /// do nothing
 }
 return retval
}

Storage Default
{
<Data name="countryDefaultData">
<Value name="1">
<Value>id</Value>
</Value>
<Value name="2">
<Value>geonameid</Value>
</Value>
<Value name="3">
<Value>name</Value>
</Value>
<Value name="4">
<Value>iso2</Value>
</Value>
<Value name="5">
<Value>iso3</Value>
</Value>
<Value name="6">
<Value>isono</Value>
</Value>
<Value name="7">
<Value>fips</Value>
</Value>
<Value name="8">
<Value>continent</Value>
</Value>
<Value name="9">
<Value>tld</Value>
</Value>
<Value name="10">
<Value>currencycode</Value>
</Value>
<Value name="11">
<Value>currencyname</Value>
</Value>
<Value name="12">
<Value>pcodeformat</Value>
</Value>
<Value name="13">
<Value>pcoderegex</Value>
</Value>
<Value name="14">
<Value>top</Value>
</Value>
</Data>
<DataLocation>^DGhr.BWkf.1</DataLocation>
<DefaultData>countryDefaultData</DefaultData>
<ExtentLocation>^DGhr.BWkf</ExtentLocation>
<IdFunction>sequence</IdFunction>
<IdLocation>^DGhr.BWkf.1</IdLocation>
<Index name="DDLBEIndex">
<Location>^DGhr.BWkf.2</Location>
</Index>
<Index name="IDKEY">
<Location>^DGhr.BWkf.1</Location>
</Index>
<Index name="PRIMARY">
<Location>^DGhr.BWkf.3</Location>
</Index>
<IndexLocation>^DGhr.BWkf.I</IndexLocation>
<StreamLocation>^DGhr.BWkf.S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
