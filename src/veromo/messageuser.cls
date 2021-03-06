/// 
Class veromo.messageuser Extends %Persistent [ ClassType = persistent, DdlAllowed, Final, Owner = {SuperUser}, ProcedureBlock, SqlRowIdPrivate, SqlTableName = message_user ]
{

Property id As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 2 ];

Property msg As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 3 ];

Property usr As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 4 ];

Parameter USEEXTENTSET = 1;

/// Bitmap Extent Index auto-generated by DDL CREATE TABLE statement.  Do not edit the SqlName of this index.
Index DDLBEIndex [ Extent, SqlName = "%%DDLBEIndex", Type = bitmap ];

/// DDL Primary Key Specification
Index PRIMARY On id [ PrimaryKey, Type = index, Unique ];

Storage Default
{
<Data name="messageuserDefaultData">
<Value name="1">
<Value>id</Value>
</Value>
<Value name="2">
<Value>msg</Value>
</Value>
<Value name="3">
<Value>usr</Value>
</Value>
</Data>
<DataLocation>^DGhr.EHSa.1</DataLocation>
<DefaultData>messageuserDefaultData</DefaultData>
<ExtentLocation>^DGhr.EHSa</ExtentLocation>
<IdFunction>sequence</IdFunction>
<IdLocation>^DGhr.EHSa.1</IdLocation>
<Index name="DDLBEIndex">
<Location>^DGhr.EHSa.2</Location>
</Index>
<Index name="IDKEY">
<Location>^DGhr.EHSa.1</Location>
</Index>
<Index name="PRIMARY">
<Location>^DGhr.EHSa.3</Location>
</Index>
<IndexLocation>^DGhr.EHSa.I</IndexLocation>
<StreamLocation>^DGhr.EHSa.S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
