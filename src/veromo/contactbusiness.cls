/// 
Class veromo.contactbusiness Extends %Persistent [ ClassType = persistent, DdlAllowed, Final, Owner = {SuperUser}, ProcedureBlock, SqlRowIdPrivate, SqlTableName = contact_business ]
{

Property id As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 2 ];

Property abn As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 3 ];

Property acn As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 4 ];

Parameter USEEXTENTSET = 1;

/// Bitmap Extent Index auto-generated by DDL CREATE TABLE statement.  Do not edit the SqlName of this index.
Index DDLBEIndex [ Extent, SqlName = "%%DDLBEIndex", Type = bitmap ];

/// DDL Primary Key Specification
Index PRIMARY On id [ PrimaryKey, Type = index, Unique ];

/// Foreign Key FK92F6F2AFBF396750 created via DDL
ForeignKey FK92F6F2AFBF396750(id) References veromo.contact(PRIMARY) [ OnDelete = cascade, SqlName = FK_92F6F2AFBF396750 ];

Storage Default
{
<Data name="contactbusinessDefaultData">
<Value name="1">
<Value>id</Value>
</Value>
<Value name="2">
<Value>abn</Value>
</Value>
<Value name="3">
<Value>acn</Value>
</Value>
</Data>
<DataLocation>^DGhr.EDwe.1</DataLocation>
<DefaultData>contactbusinessDefaultData</DefaultData>
<ExtentLocation>^DGhr.EDwe</ExtentLocation>
<IdFunction>sequence</IdFunction>
<IdLocation>^DGhr.EDwe.1</IdLocation>
<Index name="DDLBEIndex">
<Location>^DGhr.EDwe.2</Location>
</Index>
<Index name="IDKEY">
<Location>^DGhr.EDwe.1</Location>
</Index>
<Index name="PRIMARY">
<Location>^DGhr.EDwe.3</Location>
</Index>
<IndexLocation>^DGhr.EDwe.I</IndexLocation>
<StreamLocation>^DGhr.EDwe.S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
