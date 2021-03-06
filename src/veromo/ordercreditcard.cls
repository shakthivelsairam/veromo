/// 
Class veromo.ordercreditcard Extends %Persistent [ ClassType = persistent, DdlAllowed, Final, Owner = {SuperUser}, ProcedureBlock, SqlRowIdPrivate, SqlTableName = order_credit_card ]
{

Property id As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 2 ];

Property cardid As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 3, SqlFieldName = card_id ];

Property stripeid As %Library.String(MAXLEN = 64) [ Required, SqlColumnNumber = 4, SqlFieldName = stripe_id ];

Property cardtype As %Library.String(MAXLEN = 16) [ Required, SqlColumnNumber = 5, SqlFieldName = card_type ];

Property country As %Library.String(MAXLEN = 16) [ Required, SqlColumnNumber = 6 ];

Property expmonth As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 7, SqlFieldName = exp_month ];

Property expyear As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 8, SqlFieldName = exp_year ];

Property funding As %Library.String(MAXLEN = 8) [ Required, SqlColumnNumber = 9 ];

Property last4 As %Library.String(MAXLEN = 4) [ Required, SqlColumnNumber = 10 ];

Parameter USEEXTENTSET = 1;

/// Bitmap Extent Index auto-generated by DDL CREATE TABLE statement.  Do not edit the SqlName of this index.
Index DDLBEIndex [ Extent, SqlName = "%%DDLBEIndex", Type = bitmap ];

Index IDXA6458684ACC9A20 On cardid [ SqlName = IDX_A6458684ACC9A20, Type = index ];

/// DDL Primary Key Specification
Index PRIMARY On id [ PrimaryKey, Type = index, Unique ];

/// Foreign Key FKA6458684ACC9A20 created via DDL
ForeignKey FKA6458684ACC9A20(cardid) References veromo.creditcard(PRIMARY) [ SqlName = FK_A6458684ACC9A20 ];

Storage Default
{
<Data name="ordercreditcardDefaultData">
<Value name="1">
<Value>id</Value>
</Value>
<Value name="2">
<Value>cardid</Value>
</Value>
<Value name="3">
<Value>stripeid</Value>
</Value>
<Value name="4">
<Value>cardtype</Value>
</Value>
<Value name="5">
<Value>country</Value>
</Value>
<Value name="6">
<Value>expmonth</Value>
</Value>
<Value name="7">
<Value>expyear</Value>
</Value>
<Value name="8">
<Value>funding</Value>
</Value>
<Value name="9">
<Value>last4</Value>
</Value>
</Data>
<DataLocation>^DGhr.Fodc.1</DataLocation>
<DefaultData>ordercreditcardDefaultData</DefaultData>
<ExtentLocation>^DGhr.Fodc</ExtentLocation>
<IdFunction>sequence</IdFunction>
<IdLocation>^DGhr.Fodc.1</IdLocation>
<Index name="DDLBEIndex">
<Location>^DGhr.Fodc.2</Location>
</Index>
<Index name="IDKEY">
<Location>^DGhr.Fodc.1</Location>
</Index>
<Index name="IDXA6458684ACC9A20">
<Location>^DGhr.Fodc.4</Location>
</Index>
<Index name="PRIMARY">
<Location>^DGhr.Fodc.3</Location>
</Index>
<IndexLocation>^DGhr.Fodc.I</IndexLocation>
<StreamLocation>^DGhr.Fodc.S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
