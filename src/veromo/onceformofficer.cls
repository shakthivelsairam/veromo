/// 
Class veromo.onceformofficer Extends %Persistent [ ClassType = persistent, DdlAllowed, Final, Owner = {SuperUser}, ProcedureBlock, SqlRowIdPrivate, SqlTableName = once_form_officer ]
{

Property id As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 2 ];

Property formid As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 3, SqlFieldName = form_id ];

Property type As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 4 ];

Property thisisme As %Library.Boolean [ SqlColumnNumber = 5, SqlFieldName = this_is_me ];

Property isowner As %Library.Boolean [ SqlColumnNumber = 6, SqlFieldName = is_owner ];

Property isofficeholder As %Library.Boolean [ SqlColumnNumber = 7, SqlFieldName = is_office_holder ];

Property isdirector As %Library.Boolean [ SqlColumnNumber = 8, SqlFieldName = is_director ];

Property isshareholder As %Library.Boolean [ SqlColumnNumber = 9, SqlFieldName = is_share_holder ];

Property ispartner As %Library.Boolean [ SqlColumnNumber = 10, SqlFieldName = is_partner ];

Property issecretary As %Library.Boolean [ SqlColumnNumber = 11, SqlFieldName = is_secretary ];

Property ispublicofficer As %Library.Boolean [ SqlColumnNumber = 12, SqlFieldName = is_public_officer ];

Property isholdingcompany As %Library.Boolean [ SqlColumnNumber = 13, SqlFieldName = is_holding_company ];

Property partnerposition As %Library.String(MAXLEN = 64) [ SqlColumnNumber = 14, SqlFieldName = partner_position ];

Property tfn As %Library.String(MAXLEN = 64) [ SqlColumnNumber = 15 ];

Property title As %Library.String(MAXLEN = 4) [ SqlColumnNumber = 16 ];

Property firstname As %Library.String(MAXLEN = 20) [ SqlColumnNumber = 17, SqlFieldName = first_name ];

Property middlename As %Library.String(MAXLEN = 20) [ SqlColumnNumber = 18, SqlFieldName = middle_name ];

Property lastname As %Library.String(MAXLEN = 30) [ SqlColumnNumber = 19, SqlFieldName = last_name ];

Property formername As %Library.String(MAXLEN = 30) [ SqlColumnNumber = 20, SqlFieldName = former_name ];

Property gender As %Library.String(MAXLEN = 1) [ SqlColumnNumber = 21 ];

Property businessname As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 22, SqlFieldName = business_name ];

Property businessacn As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 23, SqlFieldName = business_acn ];

Property dobdd As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 24, SqlFieldName = dob_dd ];

Property dobmm As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 25, SqlFieldName = dob_mm ];

Property dobyyyy As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 26, SqlFieldName = dob_yyyy ];

Property birthcountry As %Library.String(MAXLEN = 30) [ SqlColumnNumber = 27, SqlFieldName = birth_country ];

Property birthstate As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 28, SqlFieldName = birth_state ];

Property birthcity As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 29, SqlFieldName = birth_city ];

Property addresscareof As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 30, SqlFieldName = address_care_of ];

Property addressfloor As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 31, SqlFieldName = address_floor ];

Property addressunit As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 32, SqlFieldName = address_unit ];

Property addressstreetnumber As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 33, SqlFieldName = address_street_number ];

Property addressstreetname As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 34, SqlFieldName = address_street_name ];

Property addressstreettype As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 35, SqlFieldName = address_street_type ];

Property addressline1 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 36, SqlFieldName = address_line1 ];

Property addressline2 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 37, SqlFieldName = address_line2 ];

Property addresscity As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 38, SqlFieldName = address_city ];

Property addressstate As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 39, SqlFieldName = address_state ];

Property addresspcode As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 40, SqlFieldName = address_pcode ];

Property addresscountry As %Library.String(MAXLEN = 30) [ SqlColumnNumber = 41, SqlFieldName = address_country ];

Property addresspostalsame As %Library.Boolean [ SqlColumnNumber = 42, SqlFieldName = address_postal_same ];

Property addresspostaldeliveryswitch As %Library.Boolean [ SqlColumnNumber = 43, SqlFieldName = address_postal_delivery_switch ];

Property addresspostaldeliverytype As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 44, SqlFieldName = address_postal_delivery_type ];

Property addresspostaldeliverynumber As %Library.String(MAXLEN = 64) [ SqlColumnNumber = 45, SqlFieldName = address_postal_delivery_number ];

Property addresspostalcareof As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 46, SqlFieldName = address_postal_care_of ];

Property addresspostalfloor As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 47, SqlFieldName = address_postal_floor ];

Property addresspostalunit As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 48, SqlFieldName = address_postal_unit ];

Property addresspostalstreetnumber As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 49, SqlFieldName = address_postal_street_number ];

Property addresspostalstreetname As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 50, SqlFieldName = address_postal_street_name ];

Property addresspostalstreettype As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 51, SqlFieldName = address_postal_street_type ];

Property addresspostalline1 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 52, SqlFieldName = address_postal_line1 ];

Property addresspostalline2 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 53, SqlFieldName = address_postal_line2 ];

Property addresspostalcity As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 54, SqlFieldName = address_postal_city ];

Property addresspostalstate As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 55, SqlFieldName = address_postal_state ];

Property addresspostalpcode As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 56, SqlFieldName = address_postal_pcode ];

Property addresspostalcountry As %Library.String(MAXLEN = 30) [ SqlColumnNumber = 57, SqlFieldName = address_postal_country ];

Property email As %Library.String(MAXLEN = 128) [ SqlColumnNumber = 58 ];

Property phonemobile As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 59, SqlFieldName = phone_mobile ];

Property phonework As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 60, SqlFieldName = phone_work ];

Property phonehome As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 61, SqlFieldName = phone_home ];

Property phonefax As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 62, SqlFieldName = phone_fax ];

Property sharesnumber As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 63, SqlFieldName = shares_number ];

Property shareprice As %Library.Numeric(MAXVAL = 999999.99, MINVAL = -999999.99, SCALE = 2) [ SqlColumnNumber = 64, SqlFieldName = share_price ];

Property sharespaid As %Library.Numeric(MAXVAL = 999999.99, MINVAL = -999999.99, SCALE = 2) [ SqlColumnNumber = 65, SqlFieldName = shares_paid ];

Property sharesunpaid As %Library.Numeric(MAXVAL = 999999.99, MINVAL = -999999.99, SCALE = 2) [ SqlColumnNumber = 66, SqlFieldName = shares_unpaid ];

Property beneficiallyheld As %Library.Boolean [ SqlColumnNumber = 67, SqlFieldName = beneficially_held ];

Property issettlor As %Library.Boolean [ SqlColumnNumber = 68, SqlFieldName = is_settlor ];

Property istrustee As %Library.Boolean [ SqlColumnNumber = 69, SqlFieldName = is_trustee ];

Property isappointor As %Library.Boolean [ SqlColumnNumber = 70, SqlFieldName = is_appointor ];

Property exclude As %Library.Boolean [ SqlColumnNumber = 71 ];

Property beneficiaryname As %Library.String(MAXLEN = 128) [ SqlColumnNumber = 72, SqlFieldName = beneficiary_name ];

Property beneficiaryabn As %Library.BigInt [ SqlColumnNumber = 73, SqlFieldName = beneficiary_abn ];

Property beneficiarytfn As %Library.String(MAXLEN = 64) [ SqlColumnNumber = 74, SqlFieldName = beneficiary_tfn ];

Property beneficiaryaddresscareof As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 75, SqlFieldName = beneficiary_address_care_of ];

Property beneficiaryaddressfloor As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 76, SqlFieldName = beneficiary_address_floor ];

Property beneficiaryaddressunit As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 77, SqlFieldName = beneficiary_address_unit ];

Property beneficiaryaddressstreetnumber As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 78, SqlFieldName = beneficiary_address_street_number ];

Property beneficiaryaddressstreetname As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 79, SqlFieldName = beneficiary_address_street_name ];

Property beneficiaryaddressstreettype As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 80, SqlFieldName = beneficiary_address_street_type ];

Property beneficiaryaddressline1 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 81, SqlFieldName = beneficiary_address_line1 ];

Property beneficiaryaddressline2 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 82, SqlFieldName = beneficiary_address_line2 ];

Property beneficiaryaddresscity As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 83, SqlFieldName = beneficiary_address_city ];

Property beneficiaryaddressstate As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 84, SqlFieldName = beneficiary_address_state ];

Property beneficiaryaddresspcode As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 85, SqlFieldName = beneficiary_address_pcode ];

Property beneficiaryaddresscountry As %Library.String(MAXLEN = 30) [ SqlColumnNumber = 86, SqlFieldName = beneficiary_address_country ];

Parameter USEEXTENTSET = 1;

/// Bitmap Extent Index auto-generated by DDL CREATE TABLE statement.  Do not edit the SqlName of this index.
Index DDLBEIndex [ Extent, SqlName = "%%DDLBEIndex", Type = bitmap ];

Index IDXD846AB5E5FF69B7D On formid [ SqlName = IDX_D846AB5E5FF69B7D, Type = index ];

/// DDL Primary Key Specification
Index PRIMARY On id [ PrimaryKey, Type = index, Unique ];

/// Foreign Key FKD846AB5E5FF69B7D created via DDL
ForeignKey FKD846AB5E5FF69B7D(formid) References veromo.onceform(PRIMARY) [ SqlName = FK_D846AB5E5FF69B7D ];

Storage Default
{
<Data name="onceformofficerDefaultData">
<Value name="1">
<Value>id</Value>
</Value>
<Value name="2">
<Value>formid</Value>
</Value>
<Value name="3">
<Value>type</Value>
</Value>
<Value name="4">
<Value>thisisme</Value>
</Value>
<Value name="5">
<Value>isowner</Value>
</Value>
<Value name="6">
<Value>isofficeholder</Value>
</Value>
<Value name="7">
<Value>isdirector</Value>
</Value>
<Value name="8">
<Value>isshareholder</Value>
</Value>
<Value name="9">
<Value>ispartner</Value>
</Value>
<Value name="10">
<Value>issecretary</Value>
</Value>
<Value name="11">
<Value>ispublicofficer</Value>
</Value>
<Value name="12">
<Value>isholdingcompany</Value>
</Value>
<Value name="13">
<Value>partnerposition</Value>
</Value>
<Value name="14">
<Value>tfn</Value>
</Value>
<Value name="15">
<Value>title</Value>
</Value>
<Value name="16">
<Value>firstname</Value>
</Value>
<Value name="17">
<Value>middlename</Value>
</Value>
<Value name="18">
<Value>lastname</Value>
</Value>
<Value name="19">
<Value>formername</Value>
</Value>
<Value name="20">
<Value>gender</Value>
</Value>
<Value name="21">
<Value>businessname</Value>
</Value>
<Value name="22">
<Value>businessacn</Value>
</Value>
<Value name="23">
<Value>dobdd</Value>
</Value>
<Value name="24">
<Value>dobmm</Value>
</Value>
<Value name="25">
<Value>dobyyyy</Value>
</Value>
<Value name="26">
<Value>birthcountry</Value>
</Value>
<Value name="27">
<Value>birthstate</Value>
</Value>
<Value name="28">
<Value>birthcity</Value>
</Value>
<Value name="29">
<Value>addresscareof</Value>
</Value>
<Value name="30">
<Value>addressfloor</Value>
</Value>
<Value name="31">
<Value>addressunit</Value>
</Value>
<Value name="32">
<Value>addressstreetnumber</Value>
</Value>
<Value name="33">
<Value>addressstreetname</Value>
</Value>
<Value name="34">
<Value>addressstreettype</Value>
</Value>
<Value name="35">
<Value>addressline1</Value>
</Value>
<Value name="36">
<Value>addressline2</Value>
</Value>
<Value name="37">
<Value>addresscity</Value>
</Value>
<Value name="38">
<Value>addressstate</Value>
</Value>
<Value name="39">
<Value>addresspcode</Value>
</Value>
<Value name="40">
<Value>addresscountry</Value>
</Value>
<Value name="41">
<Value>addresspostalsame</Value>
</Value>
<Value name="42">
<Value>addresspostaldeliveryswitch</Value>
</Value>
<Value name="43">
<Value>addresspostaldeliverytype</Value>
</Value>
<Value name="44">
<Value>addresspostaldeliverynumber</Value>
</Value>
<Value name="45">
<Value>addresspostalcareof</Value>
</Value>
<Value name="46">
<Value>addresspostalfloor</Value>
</Value>
<Value name="47">
<Value>addresspostalunit</Value>
</Value>
<Value name="48">
<Value>addresspostalstreetnumber</Value>
</Value>
<Value name="49">
<Value>addresspostalstreetname</Value>
</Value>
<Value name="50">
<Value>addresspostalstreettype</Value>
</Value>
<Value name="51">
<Value>addresspostalline1</Value>
</Value>
<Value name="52">
<Value>addresspostalline2</Value>
</Value>
<Value name="53">
<Value>addresspostalcity</Value>
</Value>
<Value name="54">
<Value>addresspostalstate</Value>
</Value>
<Value name="55">
<Value>addresspostalpcode</Value>
</Value>
<Value name="56">
<Value>addresspostalcountry</Value>
</Value>
<Value name="57">
<Value>email</Value>
</Value>
<Value name="58">
<Value>phonemobile</Value>
</Value>
<Value name="59">
<Value>phonework</Value>
</Value>
<Value name="60">
<Value>phonehome</Value>
</Value>
<Value name="61">
<Value>phonefax</Value>
</Value>
<Value name="62">
<Value>sharesnumber</Value>
</Value>
<Value name="63">
<Value>shareprice</Value>
</Value>
<Value name="64">
<Value>sharespaid</Value>
</Value>
<Value name="65">
<Value>sharesunpaid</Value>
</Value>
<Value name="66">
<Value>beneficiallyheld</Value>
</Value>
<Value name="67">
<Value>issettlor</Value>
</Value>
<Value name="68">
<Value>istrustee</Value>
</Value>
<Value name="69">
<Value>isappointor</Value>
</Value>
<Value name="70">
<Value>exclude</Value>
</Value>
<Value name="71">
<Value>beneficiaryname</Value>
</Value>
<Value name="72">
<Value>beneficiaryabn</Value>
</Value>
<Value name="73">
<Value>beneficiarytfn</Value>
</Value>
<Value name="74">
<Value>beneficiaryaddresscareof</Value>
</Value>
<Value name="75">
<Value>beneficiaryaddressfloor</Value>
</Value>
<Value name="76">
<Value>beneficiaryaddressunit</Value>
</Value>
<Value name="77">
<Value>beneficiaryaddressstreetnumber</Value>
</Value>
<Value name="78">
<Value>beneficiaryaddressstreetname</Value>
</Value>
<Value name="79">
<Value>beneficiaryaddressstreettype</Value>
</Value>
<Value name="80">
<Value>beneficiaryaddressline1</Value>
</Value>
<Value name="81">
<Value>beneficiaryaddressline2</Value>
</Value>
<Value name="82">
<Value>beneficiaryaddresscity</Value>
</Value>
<Value name="83">
<Value>beneficiaryaddressstate</Value>
</Value>
<Value name="84">
<Value>beneficiaryaddresspcode</Value>
</Value>
<Value name="85">
<Value>beneficiaryaddresscountry</Value>
</Value>
</Data>
<DataLocation>^DGhr.CmJG.1</DataLocation>
<DefaultData>onceformofficerDefaultData</DefaultData>
<ExtentLocation>^DGhr.CmJG</ExtentLocation>
<IdFunction>sequence</IdFunction>
<IdLocation>^DGhr.CmJG.1</IdLocation>
<Index name="DDLBEIndex">
<Location>^DGhr.CmJG.2</Location>
</Index>
<Index name="IDKEY">
<Location>^DGhr.CmJG.1</Location>
</Index>
<Index name="IDXD846AB5E5FF69B7D">
<Location>^DGhr.CmJG.4</Location>
</Index>
<Index name="PRIMARY">
<Location>^DGhr.CmJG.3</Location>
</Index>
<IndexLocation>^DGhr.CmJG.I</IndexLocation>
<StreamLocation>^DGhr.CmJG.S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
