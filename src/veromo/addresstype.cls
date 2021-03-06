/// 
Class veromo.addresstype Extends %Persistent [ ClassType = persistent, DdlAllowed, Final, Owner = {SuperUser}, ProcedureBlock, SqlRowIdPrivate, SqlTableName = address_type ]
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
<Data name="addresstypeDefaultData">
<Value name="1">
<Value>id</Value>
</Value>
<Value name="2">
<Value>name</Value>
</Value>
</Data>
<DataLocation>^DGhr.CXnc.1</DataLocation>
<DefaultData>addresstypeDefaultData</DefaultData>
<ExtentLocation>^DGhr.CXnc</ExtentLocation>
<IdFunction>sequence</IdFunction>
<IdLocation>^DGhr.CXnc.1</IdLocation>
<Index name="DDLBEIndex">
<Location>^DGhr.CXnc.2</Location>
</Index>
<Index name="IDKEY">
<Location>^DGhr.CXnc.1</Location>
</Index>
<Index name="PRIMARY">
<Location>^DGhr.CXnc.3</Location>
</Index>
<IndexLocation>^DGhr.CXnc.I</IndexLocation>
<StreamLocation>^DGhr.CXnc.S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
