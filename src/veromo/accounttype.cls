/// 
Class veromo.accounttype Extends %Persistent [ ClassType = persistent, DdlAllowed, Final, Owner = {SuperUser}, ProcedureBlock, SqlRowIdPrivate, SqlTableName = account_type ]
{

Property id As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 2 ];

Property name As %Library.String(MAXLEN = 32) [ Required, SqlColumnNumber = 3 ];

Parameter USEEXTENTSET = 1;

/// Bitmap Extent Index auto-generated by DDL CREATE TABLE statement.  Do not edit the SqlName of this index.
Index DDLBEIndex [ Extent, SqlName = "%%DDLBEIndex", Type = bitmap ];

/// DDL Primary Key Specification
Index PRIMARY On id [ PrimaryKey, Type = index, Unique ];

Storage Default
{
<Data name="accounttypeDefaultData">
<Value name="1">
<Value>id</Value>
</Value>
<Value name="2">
<Value>name</Value>
</Value>
</Data>
<DataLocation>^DGhr.CMoU.1</DataLocation>
<DefaultData>accounttypeDefaultData</DefaultData>
<ExtentLocation>^DGhr.CMoU</ExtentLocation>
<IdFunction>sequence</IdFunction>
<IdLocation>^DGhr.CMoU.1</IdLocation>
<Index name="DDLBEIndex">
<Location>^DGhr.CMoU.2</Location>
</Index>
<Index name="IDKEY">
<Location>^DGhr.CMoU.1</Location>
</Index>
<Index name="PRIMARY">
<Location>^DGhr.CMoU.3</Location>
</Index>
<IndexLocation>^DGhr.CMoU.I</IndexLocation>
<StreamLocation>^DGhr.CMoU.S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
