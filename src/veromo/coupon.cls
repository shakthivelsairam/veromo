/// 
Class veromo.coupon Extends %Persistent [ ClassType = persistent, DdlAllowed, Final, Owner = {SuperUser}, ProcedureBlock, SqlRowIdPrivate, SqlTableName = coupon ]
{

Property id As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 2 ];

Property name As %Library.String(MAXLEN = 12) [ SqlColumnNumber = 3 ];

Property description As %Library.String(MAXLEN = 255) [ SqlColumnNumber = 4 ];

Property discount As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 5 ];

Property expires As %Library.TimeStamp [ SqlColumnNumber = 6 ];

Property created As %Library.TimeStamp [ SqlColumnNumber = 7 ];

Property isdollar As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 8, SqlFieldName = is_dollar ];

Property package As %Library.String(MAXLEN = 100) [ SqlColumnNumber = 9 ];

Parameter USEEXTENTSET = 1;

/// Bitmap Extent Index auto-generated by DDL CREATE TABLE statement.  Do not edit the SqlName of this index.
Index DDLBEIndex [ Extent, SqlName = "%%DDLBEIndex", Type = bitmap ];

/// DDL Primary Key Specification
Index PRIMARY On id [ PrimaryKey, Type = index, Unique ];

Storage Default
{
<Data name="couponDefaultData">
<Value name="1">
<Value>id</Value>
</Value>
<Value name="2">
<Value>name</Value>
</Value>
<Value name="3">
<Value>description</Value>
</Value>
<Value name="4">
<Value>discount</Value>
</Value>
<Value name="5">
<Value>expires</Value>
</Value>
<Value name="6">
<Value>created</Value>
</Value>
<Value name="7">
<Value>isdollar</Value>
</Value>
<Value name="8">
<Value>package</Value>
</Value>
</Data>
<DataLocation>^DGhr.BqO8.1</DataLocation>
<DefaultData>couponDefaultData</DefaultData>
<ExtentLocation>^DGhr.BqO8</ExtentLocation>
<IdFunction>sequence</IdFunction>
<IdLocation>^DGhr.BqO8.1</IdLocation>
<Index name="DDLBEIndex">
<Location>^DGhr.BqO8.2</Location>
</Index>
<Index name="IDKEY">
<Location>^DGhr.BqO8.1</Location>
</Index>
<Index name="PRIMARY">
<Location>^DGhr.BqO8.3</Location>
</Index>
<IndexLocation>^DGhr.BqO8.I</IndexLocation>
<StreamLocation>^DGhr.BqO8.S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
