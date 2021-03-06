/// 
Class veromo.cardaccounts Extends %Persistent [ ClassType = persistent, DdlAllowed, Final, Owner = {SuperUser}, ProcedureBlock, SqlRowIdPrivate, SqlTableName = card_accounts ]
{

Property cardid As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 2, SqlFieldName = card_id ];

Property accountid As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 3, SqlFieldName = account_id ];

Parameter USEEXTENTSET = 1;

/// Bitmap Extent Index auto-generated by DDL CREATE TABLE statement.  Do not edit the SqlName of this index.
Index DDLBEIndex [ Extent, SqlName = "%%DDLBEIndex", Type = bitmap ];

Index IDX73F9502F4ACC9A20 On cardid [ SqlName = IDX_73F9502F4ACC9A20, Type = index ];

Index IDX73F9502F9B6B5FBA On accountid [ SqlName = IDX_73F9502F9B6B5FBA, Type = index ];

/// DDL Primary Key Specification
Index PRIMARY On (cardid, accountid) [ PrimaryKey, Type = index, Unique ];

/// Foreign Key FK73F9502F4ACC9A20 created via DDL
ForeignKey FK73F9502F4ACC9A20(cardid) References veromo.creditcard(PRIMARY) [ SqlName = FK_73F9502F4ACC9A20 ];

/// Foreign Key FK73F9502F9B6B5FBA created via DDL
ForeignKey FK73F9502F9B6B5FBA(accountid) References veromo.account(PRIMARY) [ SqlName = FK_73F9502F9B6B5FBA ];

Storage Default
{
<Data name="cardaccountsDefaultData">
<Value name="1">
<Value>cardid</Value>
</Value>
<Value name="2">
<Value>accountid</Value>
</Value>
</Data>
<DataLocation>^DGhr.EHEl.1</DataLocation>
<DefaultData>cardaccountsDefaultData</DefaultData>
<ExtentLocation>^DGhr.EHEl</ExtentLocation>
<IdFunction>sequence</IdFunction>
<IdLocation>^DGhr.EHEl.1</IdLocation>
<Index name="DDLBEIndex">
<Location>^DGhr.EHEl.2</Location>
</Index>
<Index name="IDKEY">
<Location>^DGhr.EHEl.1</Location>
</Index>
<Index name="IDX73F9502F4ACC9A20">
<Location>^DGhr.EHEl.4</Location>
</Index>
<Index name="IDX73F9502F9B6B5FBA">
<Location>^DGhr.EHEl.5</Location>
</Index>
<Index name="PRIMARY">
<Location>^DGhr.EHEl.3</Location>
</Index>
<IndexLocation>^DGhr.EHEl.I</IndexLocation>
<StreamLocation>^DGhr.EHEl.S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
