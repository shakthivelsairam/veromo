/// 
Class veromo.searchlog Extends %Persistent [ ClassType = persistent, DdlAllowed, Final, Owner = {SuperUser}, ProcedureBlock, SqlRowIdPrivate, SqlTableName = search_log ]
{

Property id As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 2 ];

Property ipaddress As %Library.String(MAXLEN = 45) [ Required, SqlColumnNumber = 3, SqlFieldName = ip_address ];

Property sessionid As %Library.String(MAXLEN = 32) [ Required, SqlColumnNumber = 4, SqlFieldName = session_id ];

Property searchtype As %Library.String(MAXLEN = 32) [ Required, SqlColumnNumber = 5, SqlFieldName = search_type ];

Property searchterm As %Library.String(MAXLEN = 128) [ Required, SqlColumnNumber = 6, SqlFieldName = search_term ];

Property response As %Stream.GlobalCharacter [ Required, SqlColumnNumber = 7 ];

Property datetime As %Library.TimeStamp [ Required, SqlColumnNumber = 8, SqlFieldName = date_time ];

Parameter USEEXTENTSET = 1;

/// Bitmap Extent Index auto-generated by DDL CREATE TABLE statement.  Do not edit the SqlName of this index.
Index DDLBEIndex [ Extent, SqlName = "%%DDLBEIndex", Type = bitmap ];

/// DDL Primary Key Specification
Index PRIMARY On id [ PrimaryKey, Type = index, Unique ];

Storage Default
{
<Data name="searchlogDefaultData">
<Value name="1">
<Value>id</Value>
</Value>
<Value name="2">
<Value>ipaddress</Value>
</Value>
<Value name="3">
<Value>sessionid</Value>
</Value>
<Value name="4">
<Value>searchtype</Value>
</Value>
<Value name="5">
<Value>searchterm</Value>
</Value>
<Value name="6">
<Value>response</Value>
</Value>
<Value name="7">
<Value>datetime</Value>
</Value>
</Data>
<DataLocation>^DGhr.CZUr.1</DataLocation>
<DefaultData>searchlogDefaultData</DefaultData>
<ExtentLocation>^DGhr.CZUr</ExtentLocation>
<IdFunction>sequence</IdFunction>
<IdLocation>^DGhr.CZUr.1</IdLocation>
<Index name="DDLBEIndex">
<Location>^DGhr.CZUr.2</Location>
</Index>
<Index name="IDKEY">
<Location>^DGhr.CZUr.1</Location>
</Index>
<Index name="PRIMARY">
<Location>^DGhr.CZUr.3</Location>
</Index>
<IndexLocation>^DGhr.CZUr.I</IndexLocation>
<StreamLocation>^DGhr.CZUr.S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
