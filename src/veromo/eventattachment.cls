/// 
Class veromo.eventattachment Extends %Persistent [ ClassType = persistent, DdlAllowed, Final, Owner = {SuperUser}, ProcedureBlock, SqlRowIdPrivate, SqlTableName = event_attachment ]
{

Property id As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 2 ];

Property eventid As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 3, SqlFieldName = event_id ];

Property path As %Library.String(MAXLEN = 255) [ Required, SqlColumnNumber = 4 ];

Parameter USEEXTENTSET = 1;

/// Bitmap Extent Index auto-generated by DDL CREATE TABLE statement.  Do not edit the SqlName of this index.
Index DDLBEIndex [ Extent, SqlName = "%%DDLBEIndex", Type = bitmap ];

Index IDX21B1009471F7E88B On eventid [ SqlName = IDX_21B1009471F7E88B, Type = index ];

/// DDL Primary Key Specification
Index PRIMARY On id [ PrimaryKey, Type = index, Unique ];

Storage Default
{
<Data name="eventattachmentDefaultData">
<Value name="1">
<Value>id</Value>
</Value>
<Value name="2">
<Value>eventid</Value>
</Value>
<Value name="3">
<Value>path</Value>
</Value>
</Data>
<DataLocation>^DGhr.DGU7.1</DataLocation>
<DefaultData>eventattachmentDefaultData</DefaultData>
<ExtentLocation>^DGhr.DGU7</ExtentLocation>
<IdFunction>sequence</IdFunction>
<IdLocation>^DGhr.DGU7.1</IdLocation>
<Index name="DDLBEIndex">
<Location>^DGhr.DGU7.2</Location>
</Index>
<Index name="IDKEY">
<Location>^DGhr.DGU7.1</Location>
</Index>
<Index name="IDX21B1009471F7E88B">
<Location>^DGhr.DGU7.4</Location>
</Index>
<Index name="PRIMARY">
<Location>^DGhr.DGU7.3</Location>
</Index>
<IndexLocation>^DGhr.DGU7.I</IndexLocation>
<StreamLocation>^DGhr.DGU7.S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
