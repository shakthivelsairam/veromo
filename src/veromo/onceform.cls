/// 
Class veromo.onceform Extends %Persistent [ ClassType = persistent, DdlAllowed, Final, Owner = {SuperUser}, ProcedureBlock, SqlRowIdPrivate, SqlTableName = once_form ]
{

Property id As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ Required, SqlColumnNumber = 2 ];

Property accountid As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 3, SqlFieldName = account_id ];

Property orderid As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 4, SqlFieldName = order_id ];

Property formstep As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 5, SqlFieldName = form_step ];

Property formpackage As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 6, SqlFieldName = form_package ];

Property formbiztype As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 7, SqlFieldName = form_biz_type ];

Property formcompleted As %Library.Boolean [ SqlColumnNumber = 8, SqlFieldName = form_completed ];

Property businessname As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 9, SqlFieldName = business_name ];

Property businessextension As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 10, SqlFieldName = business_extension ];

Property businessdescription As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 11, SqlFieldName = business_description ];

Property businessactivitybiccode As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 12, SqlFieldName = business_activity_bic_code ];

Property businessactivitydescription As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 13, SqlFieldName = business_activity_description ];

Property businessactivitybicdescription As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 14, SqlFieldName = business_activity_bic_description ];

Property businessactivityanzsiccode As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 15, SqlFieldName = business_activity_anzsic_code ];

Property businessactivityanzsicdescription As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 16, SqlFieldName = business_activity_anzsic_description ];

Property businessactivityrecentindex As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 17, SqlFieldName = business_activity_recent_index ];

Property businessactivityselectedindex As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 18, SqlFieldName = business_activity_selected_index ];

Property businessfamilypartnership As %Library.Boolean [ SqlColumnNumber = 19, SqlFieldName = business_family_partnership ];

Property businessregistrationstate As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 20, SqlFieldName = business_registration_state ];

Property businessaddressfloor As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 21, SqlFieldName = business_address_floor ];

Property businessaddressunit As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 22, SqlFieldName = business_address_unit ];

Property businessaddressstreetnumber As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 23, SqlFieldName = business_address_street_number ];

Property businessaddressstreetname As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 24, SqlFieldName = business_address_street_name ];

Property businessaddressstreettype As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 25, SqlFieldName = business_address_street_type ];

Property businessaddressline1 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 26, SqlFieldName = business_address_line1 ];

Property businessaddressline2 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 27, SqlFieldName = business_address_line2 ];

Property businessaddresscity As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 28, SqlFieldName = business_address_city ];

Property businessaddressstate As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 29, SqlFieldName = business_address_state ];

Property businessaddresspcode As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 30, SqlFieldName = business_address_pcode ];

Property businessaddresscountry As %Library.String(MAXLEN = 30) [ SqlColumnNumber = 31, SqlFieldName = business_address_country ];

Property businesspostaladdresssame As %Library.Boolean [ SqlColumnNumber = 32, SqlFieldName = business_postal_address_same ];

Property businesspostaladdressdeliveryswitch As %Library.Boolean [ SqlColumnNumber = 33, SqlFieldName = business_postal_address_delivery_switch ];

Property businesspostaladdressdeliverytype As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 34, SqlFieldName = business_postal_address_delivery_type ];

Property businesspostaladdressdeliverynumber As %Library.String(MAXLEN = 64) [ SqlColumnNumber = 35, SqlFieldName = business_postal_address_delivery_number ];

Property businesspostaladdressfloor As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 36, SqlFieldName = business_postal_address_floor ];

Property businesspostaladdressunit As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 37, SqlFieldName = business_postal_address_unit ];

Property businesspostaladdressstreetnumber As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 38, SqlFieldName = business_postal_address_street_number ];

Property businesspostaladdressstreetname As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 39, SqlFieldName = business_postal_address_street_name ];

Property businesspostaladdressstreettype As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 40, SqlFieldName = business_postal_address_street_type ];

Property businesspostaladdressline1 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 41, SqlFieldName = business_postal_address_line1 ];

Property businesspostaladdressline2 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 42, SqlFieldName = business_postal_address_line2 ];

Property businesspostaladdresscity As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 43, SqlFieldName = business_postal_address_city ];

Property businesspostaladdressstate As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 44, SqlFieldName = business_postal_address_state ];

Property businesspostaladdresspcode As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 45, SqlFieldName = business_postal_address_pcode ];

Property businesspostaladdresscountry As %Library.String(MAXLEN = 30) [ SqlColumnNumber = 46, SqlFieldName = business_postal_address_country ];

Property businessregisteredaddresscareof As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 47, SqlFieldName = business_registered_address_care_of ];

Property businessregisteredaddressfloor As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 48, SqlFieldName = business_registered_address_floor ];

Property businessregisteredaddressunit As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 49, SqlFieldName = business_registered_address_unit ];

Property businessregisteredaddressstreetnumber As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 50, SqlFieldName = business_registered_address_street_number ];

Property businessregisteredaddressstreetname As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 51, SqlFieldName = business_registered_address_street_name ];

Property businessregisteredaddressstreettype As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 52, SqlFieldName = business_registered_address_street_type ];

Property businessregisteredaddressline1 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 53, SqlFieldName = business_registered_address_line1 ];

Property businessregisteredaddressline2 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 54, SqlFieldName = business_registered_address_line2 ];

Property businessregisteredaddresscity As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 55, SqlFieldName = business_registered_address_city ];

Property businessregisteredaddressstate As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 56, SqlFieldName = business_registered_address_state ];

Property businessregisteredaddresspcode As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 57, SqlFieldName = business_registered_address_pcode ];

Property businessregisteredaddresscountry As %Library.String(MAXLEN = 30) [ SqlColumnNumber = 58, SqlFieldName = business_registered_address_country ];

Property businessregisteredaddressoccupied As %Library.Boolean [ SqlColumnNumber = 59, SqlFieldName = business_registered_address_occupied ];

Property businessregisteredaddressoccupiername As %Library.String(MAXLEN = 64) [ SqlColumnNumber = 60, SqlFieldName = business_registered_address_occupier_name ];

Property businessregisteredaddressoccupierconsent As %Library.Boolean [ SqlColumnNumber = 61, SqlFieldName = business_registered_address_occupier_consent ];

Property businessprincipaladdresssame As %Library.Boolean [ SqlColumnNumber = 62, SqlFieldName = business_principal_address_same ];

Property businessprincipaladdresscareof As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 63, SqlFieldName = business_principal_address_care_of ];

Property businessprincipaladdressfloor As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 64, SqlFieldName = business_principal_address_floor ];

Property businessprincipaladdressunit As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 65, SqlFieldName = business_principal_address_unit ];

Property businessprincipaladdressstreetnumber As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 66, SqlFieldName = business_principal_address_street_number ];

Property businessprincipaladdressstreetname As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 67, SqlFieldName = business_principal_address_street_name ];

Property businessprincipaladdressstreettype As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 68, SqlFieldName = business_principal_address_street_type ];

Property businessprincipaladdressline1 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 69, SqlFieldName = business_principal_address_line1 ];

Property businessprincipaladdressline2 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 70, SqlFieldName = business_principal_address_line2 ];

Property businessprincipaladdresscity As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 71, SqlFieldName = business_principal_address_city ];

Property businessprincipaladdressstate As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 72, SqlFieldName = business_principal_address_state ];

Property businessprincipaladdresspcode As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 73, SqlFieldName = business_principal_address_pcode ];

Property businessprincipaladdresscountry As %Library.String(MAXLEN = 30) [ SqlColumnNumber = 74, SqlFieldName = business_principal_address_country ];

Property businessholdingcompanyacn As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 75, SqlFieldName = business_holding_company_acn ];

Property addressbillingname As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 76, SqlFieldName = address_billing_name ];

Property addressbillingdeliveryswitch As %Library.Boolean [ SqlColumnNumber = 77, SqlFieldName = address_billing_delivery_switch ];

Property addressbillingdeliverytype As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 78, SqlFieldName = address_billing_delivery_type ];

Property addressbillingdeliverynumber As %Library.String(MAXLEN = 64) [ SqlColumnNumber = 79, SqlFieldName = address_billing_delivery_number ];

Property addressbillingfloor As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 80, SqlFieldName = address_billing_floor ];

Property addressbillingunit As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 81, SqlFieldName = address_billing_unit ];

Property addressbillingstreetnumber As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 82, SqlFieldName = address_billing_street_number ];

Property addressbillingstreetname As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 83, SqlFieldName = address_billing_street_name ];

Property addressbillingstreettype As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 84, SqlFieldName = address_billing_street_type ];

Property addressbillingline1 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 85, SqlFieldName = address_billing_line1 ];

Property addressbillingline2 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 86, SqlFieldName = address_billing_line2 ];

Property addressbillingcity As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 87, SqlFieldName = address_billing_city ];

Property addressbillingstate As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 88, SqlFieldName = address_billing_state ];

Property addressbillingpcode As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 89, SqlFieldName = address_billing_pcode ];

Property addressbillingcountry As %Library.String(MAXLEN = 30) [ SqlColumnNumber = 90, SqlFieldName = address_billing_country ];

Property addressdeliveryname As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 91, SqlFieldName = address_delivery_name ];

Property addressdeliverydeliveryswitch As %Library.Boolean [ SqlColumnNumber = 92, SqlFieldName = address_delivery_delivery_switch ];

Property addressdeliverydeliverytype As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 93, SqlFieldName = address_delivery_delivery_type ];

Property addressdeliverydeliverynumber As %Library.String(MAXLEN = 64) [ SqlColumnNumber = 94, SqlFieldName = address_delivery_delivery_number ];

Property addressdeliveryfloor As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 95, SqlFieldName = address_delivery_floor ];

Property addressdeliveryunit As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 96, SqlFieldName = address_delivery_unit ];

Property addressdeliverystreetnumber As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 97, SqlFieldName = address_delivery_street_number ];

Property addressdeliverystreetname As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 98, SqlFieldName = address_delivery_street_name ];

Property addressdeliverystreettype As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 99, SqlFieldName = address_delivery_street_type ];

Property addressdeliveryline1 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 100, SqlFieldName = address_delivery_line1 ];

Property addressdeliveryline2 As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 101, SqlFieldName = address_delivery_line2 ];

Property addressdeliverycity As %Library.String(MAXLEN = 50) [ SqlColumnNumber = 102, SqlFieldName = address_delivery_city ];

Property addressdeliverystate As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 103, SqlFieldName = address_delivery_state ];

Property addressdeliverypcode As %Library.String(MAXLEN = 16) [ SqlColumnNumber = 104, SqlFieldName = address_delivery_pcode ];

Property addressdeliverycountry As %Library.String(MAXLEN = 30) [ SqlColumnNumber = 105, SqlFieldName = address_delivery_country ];

Property employees As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 106 ];

Property salaries As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 107 ];

Property turnover As %Library.String(MAXLEN = 32) [ SqlColumnNumber = 108 ];

Property registergst As %Library.Boolean [ SqlColumnNumber = 109, SqlFieldName = register_gst ];

Property accountgst As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 110, SqlFieldName = account_gst ];

Property reportfrequency As %Library.String(MAXLEN = 12) [ SqlColumnNumber = 111, SqlFieldName = report_frequency ];

Property registerpayg As %Library.Boolean [ SqlColumnNumber = 112, SqlFieldName = register_payg ];

Property paydividends As %Library.Boolean [ SqlColumnNumber = 113, SqlFieldName = pay_dividends ];

Property investmentbody As %Library.Boolean [ SqlColumnNumber = 114, SqlFieldName = investment_body ];

Property registerfbt As %Library.Boolean [ SqlColumnNumber = 115, SqlFieldName = register_fbt ];

Property registerlct As %Library.Boolean [ SqlColumnNumber = 116, SqlFieldName = register_lct ];

Property registerwet As %Library.Boolean [ SqlColumnNumber = 117, SqlFieldName = register_wet ];

Property agriculturalproperty As %Library.Boolean [ SqlColumnNumber = 118, SqlFieldName = agricultural_property ];

Property taxexempt As %Library.Boolean [ SqlColumnNumber = 119, SqlFieldName = tax_exempt ];

Property nonprofit As %Library.Boolean [ SqlColumnNumber = 120, SqlFieldName = non_profit ];

Property taxagent As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 121, SqlFieldName = tax_agent ];

Property declaration As %Library.Boolean [ SqlColumnNumber = 122 ];

Property initialbusinessname As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 123, SqlFieldName = initial_business_name ];

Property initialdomains As %Stream.GlobalCharacter [ SqlColumnNumber = 124, SqlFieldName = initial_domains ];

Property created As %Library.TimeStamp [ SqlColumnNumber = 125 ];

Property completed As %Library.TimeStamp [ SqlColumnNumber = 126 ];

Property trustname As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 127, SqlFieldName = trust_name ];

Property trusttype As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 128, SqlFieldName = trust_type ];

Property trustquorum As %Library.Boolean [ SqlColumnNumber = 129, SqlFieldName = trust_quorum ];

Property trustjurisdiction As %Library.String(MAXLEN = 8) [ SqlColumnNumber = 130, SqlFieldName = trust_jurisdiction ];

Property trustsettledsum As %Library.Numeric(MAXVAL = 999999.99, MINVAL = -999999.99, SCALE = 2) [ SqlColumnNumber = 131, SqlFieldName = trust_settled_sum ];

Property trustmemorandum As %Library.Boolean [ SqlColumnNumber = 132, SqlFieldName = trust_memorandum ];

Property trustwishesperson As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 133, SqlFieldName = trust_wishes_person ];

Property trustwisheswitness As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 134, SqlFieldName = trust_wishes_witness ];

Property trustwishes As %Stream.GlobalCharacter [ SqlColumnNumber = 135, SqlFieldName = trust_wishes ];

Property trustwishesconfidential As %Library.Boolean [ SqlColumnNumber = 136, SqlFieldName = trust_wishes_confidential ];

Property trustdd As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 137, SqlFieldName = trust_dd ];

Property trustmm As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 138, SqlFieldName = trust_mm ];

Property trustyyyy As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 139, SqlFieldName = trust_yyyy ];

Property paymenttypeid As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ SqlColumnNumber = 140, SqlFieldName = payment_type_id ];

Property referralsource As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 141, SqlFieldName = referral_source ];

Property referralcode As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 142, SqlFieldName = referral_code ];

Property registeredoffice As %Library.Boolean [ SqlColumnNumber = 143, SqlFieldName = registered_office ];

Property registeredasicagent As %Library.Boolean [ SqlColumnNumber = 144, SqlFieldName = registered_asic_agent ];

Property registeredwebhosting As %Library.Boolean [ SqlColumnNumber = 145, SqlFieldName = registered_web_hosting ];

Property registeredgsuite As %Library.Boolean [ SqlColumnNumber = 146, SqlFieldName = registered_gsuite ];

Property registeredgsuiteqty As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ InitialExpression = 0, SqlColumnNumber = 147, SqlFieldName = registered_gsuite_qty ];

Property companyregisterqty As %Library.Integer(MAXVAL = 2147483647, MINVAL = -2147483648) [ InitialExpression = 0, SqlColumnNumber = 148, SqlFieldName = company_register_qty ];

Property registeredofficephysicaladdressforwarded As %Library.Boolean [ SqlColumnNumber = 149, SqlFieldName = registered_office_physical_address_forwarded ];

Property registeredofficefullnameauthorizeveromo As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 150, SqlFieldName = registered_office_full_name_authorize_veromo ];

Property registeredofficeconfirmappointveromo As %Library.Boolean [ SqlColumnNumber = 151, SqlFieldName = registered_office_confirm_appoint_veromo ];

Property registeredofficeyourtitle As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 152, SqlFieldName = registered_office_your_title ];

Property registeredofficetelnumber As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 153, SqlFieldName = registered_office_tel_number ];

Property asicagentacnorabn As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 154, SqlFieldName = asic_agent_acn_or_abn ];

Property asicagentemailaddress As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 155, SqlFieldName = asic_agent_email_address ];

Property asicagentcompanyprincipalbusiness As %Library.Boolean [ SqlColumnNumber = 156, SqlFieldName = asic_agent_company_principal_business ];

Property asicagentregisteredforonlineaccess As %Library.Boolean [ SqlColumnNumber = 157, SqlFieldName = asic_agent_registered_for_online_access ];

Property asicagentfullnamedirectorsecretary As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 158, SqlFieldName = asic_agent_full_name_director_secretary ];

Property asicagentconfirmappointveromo As %Library.Boolean [ SqlColumnNumber = 159, SqlFieldName = asic_agent_confirm_appoint_veromo ];

Property asicagenttelnumber As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 160, SqlFieldName = asic_agent_tel_number ];

Property registeredofficeemailaddress As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 161, SqlFieldName = registered_office_email_address ];

Property registeredofficeemailaddressscannedforwarded As %Library.Boolean [ SqlColumnNumber = 162, SqlFieldName = registered_office_email_address_scanned_forwarded ];

Property asicagentemailaddressscannedforwarded As %Library.Boolean [ SqlColumnNumber = 163, SqlFieldName = asic_agent_email_address_scanned_forwarded ];

Property asicagentyourtitle As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 164, SqlFieldName = asic_agent_your_title ];

Property registeredofficeacnorabn As %Library.String(MAXLEN = 200) [ SqlColumnNumber = 165, SqlFieldName = registered_office_acn_or_abn ];

Property socialmediaavailability As %Stream.GlobalCharacter [ SqlColumnNumber = 166, SqlFieldName = social_media_availability ];

Parameter USEEXTENTSET = 1;

/// Bitmap Extent Index auto-generated by DDL CREATE TABLE statement.  Do not edit the SqlName of this index.
Index DDLBEIndex [ Extent, SqlName = "%%DDLBEIndex", Type = bitmap ];

Index IDX8B5A5A8ADC058279 On paymenttypeid [ SqlName = IDX_8B5A5A8ADC058279, Type = index ];

/// DDL Primary Key Specification
Index PRIMARY On id [ PrimaryKey, Type = index, Unique ];

Index UNIQ8B5A5A8A8D9F6D38 On orderid [ SqlName = UNIQ_8B5A5A8A8D9F6D38, Type = index ];

Index UNIQ8B5A5A8A9B6B5FBA On accountid [ SqlName = UNIQ_8B5A5A8A9B6B5FBA, Type = index ];

/// Foreign Key FK8B5A5A8A9B6B5FBA created via DDL
ForeignKey FK8B5A5A8A9B6B5FBA(accountid) References veromo.account(PRIMARY) [ SqlName = FK_8B5A5A8A9B6B5FBA ];

/// Foreign Key FK8B5A5A8ADC058279 created via DDL
ForeignKey FK8B5A5A8ADC058279(paymenttypeid) References veromo.paymenttypes(PRIMARY) [ SqlName = FK_8B5A5A8ADC058279 ];

/// Determine if there is a Form for an Account
ClassMethod accountHasForm(pAccountId) As %Library.Boolean
{
    set retval = 0
    set retval = ..UNIQ8B5A5A8A9B6B5FBAExists(pAccountId)
}

Storage Default
{
<Data name="onceformDefaultData">
<Value name="1">
<Value>id</Value>
</Value>
<Value name="2">
<Value>accountid</Value>
</Value>
<Value name="3">
<Value>orderid</Value>
</Value>
<Value name="4">
<Value>formstep</Value>
</Value>
<Value name="5">
<Value>formpackage</Value>
</Value>
<Value name="6">
<Value>formbiztype</Value>
</Value>
<Value name="7">
<Value>formcompleted</Value>
</Value>
<Value name="8">
<Value>businessname</Value>
</Value>
<Value name="9">
<Value>businessextension</Value>
</Value>
<Value name="10">
<Value>businessdescription</Value>
</Value>
<Value name="11">
<Value>businessactivitybiccode</Value>
</Value>
<Value name="12">
<Value>businessactivitydescription</Value>
</Value>
<Value name="13">
<Value>businessactivitybicdescription</Value>
</Value>
<Value name="14">
<Value>businessactivityanzsiccode</Value>
</Value>
<Value name="15">
<Value>businessactivityanzsicdescription</Value>
</Value>
<Value name="16">
<Value>businessactivityrecentindex</Value>
</Value>
<Value name="17">
<Value>businessactivityselectedindex</Value>
</Value>
<Value name="18">
<Value>businessfamilypartnership</Value>
</Value>
<Value name="19">
<Value>businessregistrationstate</Value>
</Value>
<Value name="20">
<Value>businessaddressfloor</Value>
</Value>
<Value name="21">
<Value>businessaddressunit</Value>
</Value>
<Value name="22">
<Value>businessaddressstreetnumber</Value>
</Value>
<Value name="23">
<Value>businessaddressstreetname</Value>
</Value>
<Value name="24">
<Value>businessaddressstreettype</Value>
</Value>
<Value name="25">
<Value>businessaddressline1</Value>
</Value>
<Value name="26">
<Value>businessaddressline2</Value>
</Value>
<Value name="27">
<Value>businessaddresscity</Value>
</Value>
<Value name="28">
<Value>businessaddressstate</Value>
</Value>
<Value name="29">
<Value>businessaddresspcode</Value>
</Value>
<Value name="30">
<Value>businessaddresscountry</Value>
</Value>
<Value name="31">
<Value>businesspostaladdresssame</Value>
</Value>
<Value name="32">
<Value>businesspostaladdressdeliveryswitch</Value>
</Value>
<Value name="33">
<Value>businesspostaladdressdeliverytype</Value>
</Value>
<Value name="34">
<Value>businesspostaladdressdeliverynumber</Value>
</Value>
<Value name="35">
<Value>businesspostaladdressfloor</Value>
</Value>
<Value name="36">
<Value>businesspostaladdressunit</Value>
</Value>
<Value name="37">
<Value>businesspostaladdressstreetnumber</Value>
</Value>
<Value name="38">
<Value>businesspostaladdressstreetname</Value>
</Value>
<Value name="39">
<Value>businesspostaladdressstreettype</Value>
</Value>
<Value name="40">
<Value>businesspostaladdressline1</Value>
</Value>
<Value name="41">
<Value>businesspostaladdressline2</Value>
</Value>
<Value name="42">
<Value>businesspostaladdresscity</Value>
</Value>
<Value name="43">
<Value>businesspostaladdressstate</Value>
</Value>
<Value name="44">
<Value>businesspostaladdresspcode</Value>
</Value>
<Value name="45">
<Value>businesspostaladdresscountry</Value>
</Value>
<Value name="46">
<Value>businessregisteredaddresscareof</Value>
</Value>
<Value name="47">
<Value>businessregisteredaddressfloor</Value>
</Value>
<Value name="48">
<Value>businessregisteredaddressunit</Value>
</Value>
<Value name="49">
<Value>businessregisteredaddressstreetnumber</Value>
</Value>
<Value name="50">
<Value>businessregisteredaddressstreetname</Value>
</Value>
<Value name="51">
<Value>businessregisteredaddressstreettype</Value>
</Value>
<Value name="52">
<Value>businessregisteredaddressline1</Value>
</Value>
<Value name="53">
<Value>businessregisteredaddressline2</Value>
</Value>
<Value name="54">
<Value>businessregisteredaddresscity</Value>
</Value>
<Value name="55">
<Value>businessregisteredaddressstate</Value>
</Value>
<Value name="56">
<Value>businessregisteredaddresspcode</Value>
</Value>
<Value name="57">
<Value>businessregisteredaddresscountry</Value>
</Value>
<Value name="58">
<Value>businessregisteredaddressoccupied</Value>
</Value>
<Value name="59">
<Value>businessregisteredaddressoccupiername</Value>
</Value>
<Value name="60">
<Value>businessregisteredaddressoccupierconsent</Value>
</Value>
<Value name="61">
<Value>businessprincipaladdresssame</Value>
</Value>
<Value name="62">
<Value>businessprincipaladdresscareof</Value>
</Value>
<Value name="63">
<Value>businessprincipaladdressfloor</Value>
</Value>
<Value name="64">
<Value>businessprincipaladdressunit</Value>
</Value>
<Value name="65">
<Value>businessprincipaladdressstreetnumber</Value>
</Value>
<Value name="66">
<Value>businessprincipaladdressstreetname</Value>
</Value>
<Value name="67">
<Value>businessprincipaladdressstreettype</Value>
</Value>
<Value name="68">
<Value>businessprincipaladdressline1</Value>
</Value>
<Value name="69">
<Value>businessprincipaladdressline2</Value>
</Value>
<Value name="70">
<Value>businessprincipaladdresscity</Value>
</Value>
<Value name="71">
<Value>businessprincipaladdressstate</Value>
</Value>
<Value name="72">
<Value>businessprincipaladdresspcode</Value>
</Value>
<Value name="73">
<Value>businessprincipaladdresscountry</Value>
</Value>
<Value name="74">
<Value>businessholdingcompanyacn</Value>
</Value>
<Value name="75">
<Value>addressbillingname</Value>
</Value>
<Value name="76">
<Value>addressbillingdeliveryswitch</Value>
</Value>
<Value name="77">
<Value>addressbillingdeliverytype</Value>
</Value>
<Value name="78">
<Value>addressbillingdeliverynumber</Value>
</Value>
<Value name="79">
<Value>addressbillingfloor</Value>
</Value>
<Value name="80">
<Value>addressbillingunit</Value>
</Value>
<Value name="81">
<Value>addressbillingstreetnumber</Value>
</Value>
<Value name="82">
<Value>addressbillingstreetname</Value>
</Value>
<Value name="83">
<Value>addressbillingstreettype</Value>
</Value>
<Value name="84">
<Value>addressbillingline1</Value>
</Value>
<Value name="85">
<Value>addressbillingline2</Value>
</Value>
<Value name="86">
<Value>addressbillingcity</Value>
</Value>
<Value name="87">
<Value>addressbillingstate</Value>
</Value>
<Value name="88">
<Value>addressbillingpcode</Value>
</Value>
<Value name="89">
<Value>addressbillingcountry</Value>
</Value>
<Value name="90">
<Value>addressdeliveryname</Value>
</Value>
<Value name="91">
<Value>addressdeliverydeliveryswitch</Value>
</Value>
<Value name="92">
<Value>addressdeliverydeliverytype</Value>
</Value>
<Value name="93">
<Value>addressdeliverydeliverynumber</Value>
</Value>
<Value name="94">
<Value>addressdeliveryfloor</Value>
</Value>
<Value name="95">
<Value>addressdeliveryunit</Value>
</Value>
<Value name="96">
<Value>addressdeliverystreetnumber</Value>
</Value>
<Value name="97">
<Value>addressdeliverystreetname</Value>
</Value>
<Value name="98">
<Value>addressdeliverystreettype</Value>
</Value>
<Value name="99">
<Value>addressdeliveryline1</Value>
</Value>
<Value name="100">
<Value>addressdeliveryline2</Value>
</Value>
<Value name="101">
<Value>addressdeliverycity</Value>
</Value>
<Value name="102">
<Value>addressdeliverystate</Value>
</Value>
<Value name="103">
<Value>addressdeliverypcode</Value>
</Value>
<Value name="104">
<Value>addressdeliverycountry</Value>
</Value>
<Value name="105">
<Value>employees</Value>
</Value>
<Value name="106">
<Value>salaries</Value>
</Value>
<Value name="107">
<Value>turnover</Value>
</Value>
<Value name="108">
<Value>registergst</Value>
</Value>
<Value name="109">
<Value>accountgst</Value>
</Value>
<Value name="110">
<Value>reportfrequency</Value>
</Value>
<Value name="111">
<Value>registerpayg</Value>
</Value>
<Value name="112">
<Value>paydividends</Value>
</Value>
<Value name="113">
<Value>investmentbody</Value>
</Value>
<Value name="114">
<Value>registerfbt</Value>
</Value>
<Value name="115">
<Value>registerlct</Value>
</Value>
<Value name="116">
<Value>registerwet</Value>
</Value>
<Value name="117">
<Value>agriculturalproperty</Value>
</Value>
<Value name="118">
<Value>taxexempt</Value>
</Value>
<Value name="119">
<Value>nonprofit</Value>
</Value>
<Value name="120">
<Value>taxagent</Value>
</Value>
<Value name="121">
<Value>declaration</Value>
</Value>
<Value name="122">
<Value>initialbusinessname</Value>
</Value>
<Value name="123">
<Value>initialdomains</Value>
</Value>
<Value name="124">
<Value>created</Value>
</Value>
<Value name="125">
<Value>completed</Value>
</Value>
<Value name="126">
<Value>trustname</Value>
</Value>
<Value name="127">
<Value>trusttype</Value>
</Value>
<Value name="128">
<Value>trustquorum</Value>
</Value>
<Value name="129">
<Value>trustjurisdiction</Value>
</Value>
<Value name="130">
<Value>trustsettledsum</Value>
</Value>
<Value name="131">
<Value>trustmemorandum</Value>
</Value>
<Value name="132">
<Value>trustwishesperson</Value>
</Value>
<Value name="133">
<Value>trustwisheswitness</Value>
</Value>
<Value name="134">
<Value>trustwishes</Value>
</Value>
<Value name="135">
<Value>trustwishesconfidential</Value>
</Value>
<Value name="136">
<Value>trustdd</Value>
</Value>
<Value name="137">
<Value>trustmm</Value>
</Value>
<Value name="138">
<Value>trustyyyy</Value>
</Value>
<Value name="139">
<Value>paymenttypeid</Value>
</Value>
<Value name="140">
<Value>referralsource</Value>
</Value>
<Value name="141">
<Value>referralcode</Value>
</Value>
<Value name="142">
<Value>registeredoffice</Value>
</Value>
<Value name="143">
<Value>registeredasicagent</Value>
</Value>
<Value name="144">
<Value>registeredwebhosting</Value>
</Value>
<Value name="145">
<Value>registeredgsuite</Value>
</Value>
<Value name="146">
<Value>registeredgsuiteqty</Value>
</Value>
<Value name="147">
<Value>companyregisterqty</Value>
</Value>
<Value name="148">
<Value>registeredofficephysicaladdressforwarded</Value>
</Value>
<Value name="149">
<Value>registeredofficefullnameauthorizeveromo</Value>
</Value>
<Value name="150">
<Value>registeredofficeconfirmappointveromo</Value>
</Value>
<Value name="151">
<Value>registeredofficeyourtitle</Value>
</Value>
<Value name="152">
<Value>registeredofficetelnumber</Value>
</Value>
<Value name="153">
<Value>asicagentacnorabn</Value>
</Value>
<Value name="154">
<Value>asicagentemailaddress</Value>
</Value>
<Value name="155">
<Value>asicagentcompanyprincipalbusiness</Value>
</Value>
<Value name="156">
<Value>asicagentregisteredforonlineaccess</Value>
</Value>
<Value name="157">
<Value>asicagentfullnamedirectorsecretary</Value>
</Value>
<Value name="158">
<Value>asicagentconfirmappointveromo</Value>
</Value>
<Value name="159">
<Value>asicagenttelnumber</Value>
</Value>
<Value name="160">
<Value>registeredofficeemailaddress</Value>
</Value>
<Value name="161">
<Value>registeredofficeemailaddressscannedforwarded</Value>
</Value>
<Value name="162">
<Value>asicagentemailaddressscannedforwarded</Value>
</Value>
<Value name="163">
<Value>asicagentyourtitle</Value>
</Value>
<Value name="164">
<Value>registeredofficeacnorabn</Value>
</Value>
<Value name="165">
<Value>socialmediaavailability</Value>
</Value>
</Data>
<DataLocation>^DGhr.UnCO.1</DataLocation>
<DefaultData>onceformDefaultData</DefaultData>
<ExtentLocation>^DGhr.UnCO</ExtentLocation>
<IdFunction>sequence</IdFunction>
<IdLocation>^DGhr.UnCO.1</IdLocation>
<Index name="DDLBEIndex">
<Location>^DGhr.UnCO.2</Location>
</Index>
<Index name="IDKEY">
<Location>^DGhr.UnCO.1</Location>
</Index>
<Index name="IDX8B5A5A8ADC058279">
<Location>^DGhr.UnCO.6</Location>
</Index>
<Index name="PRIMARY">
<Location>^DGhr.UnCO.3</Location>
</Index>
<Index name="UNIQ8B5A5A8A8D9F6D38">
<Location>^DGhr.UnCO.4</Location>
</Index>
<Index name="UNIQ8B5A5A8A9B6B5FBA">
<Location>^DGhr.UnCO.5</Location>
</Index>
<Index name="idxAccountid">
<Location>^DGhr.UnCO.7</Location>
</Index>
<IndexLocation>^DGhr.UnCO.I</IndexLocation>
<StreamLocation>^DGhr.UnCO.S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
