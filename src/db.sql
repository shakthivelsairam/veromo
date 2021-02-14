DROP TABLE IF EXISTS `analyte_assay_mapping`;
CREATE TABLE `analyte_assay_mapping` (
  `id` int NOT NULL AUTO_INCREMENT,
  `analyte_id` int NOT NULL,
  `equipment_id` int NOT NULL,
  `assay_code` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `tenant_id` int NOT NULL,
  `branch_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_analyte_equipment_mapping_tenant_id` (`tenant_id`),
  KEY `fk_analyte_equipment_mapping_branch_id` (`branch_id`),
  KEY `fk_analyte_equipment_mapping_analyte_id` (`analyte_id`),
  KEY `fk_analyte_equipment_mapping_equipment_id` (`equipment_id`),
  CONSTRAINT `fk_analyte_equipment_mapping_analyte_id` FOREIGN KEY (`analyte_id`) REFERENCES `analytes` (`id`),
  CONSTRAINT `fk_analyte_equipment_mapping_branch_id` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`),
  CONSTRAINT `fk_analyte_equipment_mapping_equipment_id` FOREIGN KEY (`equipment_id`) REFERENCES `equipments` (`id`),
  CONSTRAINT `fk_analyte_equipment_mapping_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `analyte_possible_results`;
CREATE TABLE `analyte_possible_results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `analyte_id` int NOT NULL,
  `result` varchar(255) NOT NULL,
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_analyte_possible_results_analyte_id` (`analyte_id`),
  KEY `fk_analyte_possible_results_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_analyte_possible_results_analyte_id` FOREIGN KEY (`analyte_id`) REFERENCES `analytes` (`id`),
  CONSTRAINT `fk_analyte_possible_results_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `analytes`;
CREATE TABLE `analytes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `report_name` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `test_id` int NOT NULL,
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_analytes_test_id` (`test_id`),
  KEY `fk_analytes_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_analytes_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`),
  CONSTRAINT `fk_analytes_test_id` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`)
);

DROP TABLE IF EXISTS `bill_details`;
CREATE TABLE `bill_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `visit_id` int NOT NULL,
  `bill_id` int NOT NULL,
  `test_id` int NOT NULL,
  `test_name` varchar(255) NOT NULL,
  `gross_amount` decimal(10,2) NOT NULL,
  `discount` decimal(10,2) NOT NULL,
  `tax` decimal(10,2) NOT NULL,
  `net_amount` decimal(10,2) NOT NULL,
  `tat_date` datetime DEFAULT NULL,
  `report_date` datetime DEFAULT NULL,
  `is_stat` tinyint DEFAULT '0',
  `status` varchar(255) NOT NULL,
  `tenant_id` int NOT NULL,
  `branch_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_bill_details_bill_id` (`bill_id`),
  KEY `fk_bill_details_branch_id` (`branch_id`),
  KEY `fk_bill_details_tenant_id` (`tenant_id`),
  KEY `fk_bill_details_test_id` (`test_id`),
  KEY `fk_bill_details_visit_id` (`visit_id`),
  CONSTRAINT `fk_bill_details_bill_id` FOREIGN KEY (`bill_id`) REFERENCES `bills` (`id`),
  CONSTRAINT `fk_bill_details_branch_id` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`),
  CONSTRAINT `fk_bill_details_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`),
  CONSTRAINT `fk_bill_details_test_id` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `fk_bill_details_visit_id` FOREIGN KEY (`visit_id`) REFERENCES `visits` (`id`)
);

DROP TABLE IF EXISTS `bills`;
CREATE TABLE `bills` (
  `id` int NOT NULL AUTO_INCREMENT,
  `patient_id` int NOT NULL,
  `visit_id` int NOT NULL,
  `client_id` int NOT NULL,
  `rate_id` int NOT NULL,
  `gross_amount` decimal(10,2) NOT NULL,
  `total_discount` decimal(10,2) NOT NULL,
  `total_tax` decimal(10,2) NOT NULL,
  `net_amount` decimal(10,2) NOT NULL,
  `received_amount` decimal(10,2) NOT NULL,
  `due` decimal(10,2) NOT NULL,
  `bill_type` enum('cash','credit') NOT NULL,
  `bill_number` varchar(255) DEFAULT NULL,
  `is_stat` tinyint DEFAULT '0',
  `tat_date` datetime DEFAULT NULL,
  `report_date` datetime DEFAULT NULL,
  `tenant_id` int NOT NULL,
  `branch_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_bills_tenant_id` (`tenant_id`),
  KEY `fk_bills_branch_id` (`branch_id`),
  KEY `fk_bills_patient_id` (`patient_id`),
  KEY `fk_bills_visit_id` (`visit_id`),
  KEY `fk_bills_client_id` (`client_id`),
  KEY `fk_bills_rate_id` (`rate_id`),
  CONSTRAINT `fk_bills_branch_id` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`),
  CONSTRAINT `fk_bills_client_id` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`),
  CONSTRAINT `fk_bills_patient_id` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`),
  CONSTRAINT `fk_bills_rate_id` FOREIGN KEY (`rate_id`) REFERENCES `rates` (`id`),
  CONSTRAINT `fk_bills_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`),
  CONSTRAINT `fk_bills_visit_id` FOREIGN KEY (`visit_id`) REFERENCES `visits` (`id`)
);

DROP TABLE IF EXISTS `branches`;
CREATE TABLE `branches` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `address_line1` varchar(255) NOT NULL,
  `address_line2` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `mobile_number` varchar(255) NOT NULL,
  `pincode` int NOT NULL,
  `launched` timestamp NULL DEFAULT NULL,
  `type` enum('collection','processing') NOT NULL,
  `proccessing_branch_id` int NOT NULL,
  `short_code` varchar(10) DEFAULT NULL,
  `is_base` tinyint DEFAULT '0',
  `base_branch_id` int NOT NULL,
  `active` tinyint DEFAULT '1',
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_branches_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_branches_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `cities`;
CREATE TABLE `cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `state_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_cities_state_id_name` (`name`,`state_id`),
  KEY `fk_cities_state_id` (`state_id`),
  CONSTRAINT `fk_cities_state_id` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`)
);

DROP TABLE IF EXISTS `client_delivery_methods`;
CREATE TABLE `client_delivery_methods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `delivery_type` enum('Internet','Email','Print') NOT NULL,
  `template` varchar(255) NOT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `active` tinyint DEFAULT '1',
  `tenant_id` int NOT NULL,
  `client_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_client_delivery_methods_tenant_id` (`tenant_id`),
  KEY `fk_client_delivery_methods_client_id` (`client_id`),
  CONSTRAINT `fk_client_delivery_methods_client_id` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`),
  CONSTRAINT `fk_client_delivery_methods_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `client_types`;
CREATE TABLE `client_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_client_types_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_client_types_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `clients`;
CREATE TABLE `clients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `account_number` varchar(255) NOT NULL,
  `account_type` enum('Cash','Credit') NOT NULL,
  `credit_limit` decimal(10,2) NOT NULL,
  `grace_limit` decimal(10,2) NOT NULL,
  `invoice_cycle` int DEFAULT NULL,
  `is_release_due_report` tinyint DEFAULT NULL,
  `contract_start_date` datetime DEFAULT NULL,
  `contract_end_date` datetime DEFAULT NULL,
  `attachment` varchar(255) NOT NULL,
  `contact_person` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `tenant_id` int NOT NULL,
  `branch_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_clients_tenant_id` (`tenant_id`),
  KEY `fk_clients_branch_id` (`branch_id`),
  CONSTRAINT `fk_clients_branch_id` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`),
  CONSTRAINT `fk_clients_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `containers`;
CREATE TABLE `containers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `short_code` varchar(10) DEFAULT NULL,
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_containers_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_containers_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `countries`;
CREATE TABLE `countries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `isd_code` varchar(255) NOT NULL,
  `phone_number_length` tinyint DEFAULT '1',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `departments`;
CREATE TABLE `departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `short_code` varchar(10) DEFAULT NULL,
  `sequence_no` int NOT NULL,
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_departments_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_departments_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `equipment_types`;
CREATE TABLE `equipment_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_equipment_types_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_equipment_types_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `equipments`;
CREATE TABLE `equipments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(255) NOT NULL,
  `model_number` varchar(255) NOT NULL,
  `serial_number` varchar(255) NOT NULL,
  `contract_expires` datetime DEFAULT NULL,
  `active` tinyint DEFAULT '1',
  `tenant_id` int NOT NULL,
  `service_group_id` int NOT NULL,
  `branch_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_equipments_tenant_id` (`tenant_id`),
  KEY `fk_equipments_service_group_id` (`service_group_id`),
  KEY `fk_equipments_branch_id` (`branch_id`),
  CONSTRAINT `fk_equipments_branch_id` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`),
  CONSTRAINT `fk_equipments_service_group_id` FOREIGN KEY (`service_group_id`) REFERENCES `service_groups` (`id`),
  CONSTRAINT `fk_equipments_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_locked` tinyint DEFAULT '0',
  `failure_attempts` int DEFAULT '0',
  `active` tinyint DEFAULT '1',
  `password_expired_date` datetime DEFAULT NULL,
  `digital_signature` blob,
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_login_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_login_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `login_roles`;
CREATE TABLE `login_roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `login_id` int NOT NULL,
  `role_id` int NOT NULL,
  `active` tinyint DEFAULT '1',
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_login_roles_tenant_id` (`tenant_id`),
  KEY `fk_login_roles_login_id` (`login_id`),
  KEY `fk_login_roles_role_id` (`role_id`),
  CONSTRAINT `fk_login_roles_login_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`),
  CONSTRAINT `fk_login_roles_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `fk_login_roles_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `menu_headers`;
CREATE TABLE `menu_headers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` int NOT NULL,
  `sorter` int NOT NULL,
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_menu_headers_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_menu_headers_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `menus`;
CREATE TABLE `menus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` int NOT NULL,
  `sorter` int NOT NULL,
  `page_id` int NOT NULL,
  `menu_header_id` int NOT NULL,
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_menus_tenant_id` (`tenant_id`),
  KEY `fk_menus_page_id` (`page_id`),
  KEY `fk_menus_menu_header_id` (`menu_header_id`),
  CONSTRAINT `fk_menus_menu_header_id` FOREIGN KEY (`menu_header_id`) REFERENCES `menu_headers` (`id`),
  CONSTRAINT `fk_menus_page_id` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`),
  CONSTRAINT `fk_menus_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `meta_data_types`;
CREATE TABLE `meta_data_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` enum('gender','title') NOT NULL,
  `value` json NOT NULL,
  `active` tinyint DEFAULT '1',
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_meta_data_types_tenant_id_type` (`tenant_id`,`type`),
  KEY `fk_meta_data_types_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_meta_data_types_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `methods`;
CREATE TABLE `methods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_methods_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_methods_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `number_patterns`;
CREATE TABLE `number_patterns` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `ordered_analyte_results`;
CREATE TABLE `ordered_analyte_results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `visit_id` int NOT NULL,
  `test_id` int NOT NULL,
  `analyte_id` int NOT NULL,
  `processing_branch` int NOT NULL,
  `analyte_name` varchar(255) NOT NULL,
  `result` json NOT NULL,
  `interpretation` varchar(255) NOT NULL,
  `reference_range` varchar(255) NOT NULL,
  `printable_range` varchar(255) NOT NULL,
  `technical_remarks` varchar(255) NOT NULL,
  `medical_remarks` varchar(255) NOT NULL,
  `method_name` varchar(255) NOT NULL,
  `uom_name` varchar(255) NOT NULL,
  `worksheet_id` int DEFAULT NULL,
  `sequence_number` int NOT NULL,
  `equipement_id` varchar(255) NOT NULL,
  `equipement_result` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `completed_by` varchar(255) NOT NULL,
  `validated_by` varchar(255) NOT NULL,
  `approved_by` varchar(255) NOT NULL,
  `completed_at` datetime DEFAULT NULL,
  `validated_at` datetime DEFAULT NULL,
  `approved_at` datetime DEFAULT NULL,
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ordered_analyte_results_analyte_id` (`analyte_id`),
  KEY `fk_ordered_analyte_results_tenant_id` (`tenant_id`),
  KEY `fk_ordered_analyte_results_test_id` (`test_id`),
  KEY `fk_ordered_analyte_results_visit_id` (`visit_id`),
  KEY `fk_ordered_analyte_results_worksheet_id` (`worksheet_id`),
  CONSTRAINT `fk_ordered_analyte_results_analyte_id` FOREIGN KEY (`analyte_id`) REFERENCES `analytes` (`id`),
  CONSTRAINT `fk_ordered_analyte_results_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`),
  CONSTRAINT `fk_ordered_analyte_results_test_id` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `fk_ordered_analyte_results_visit_id` FOREIGN KEY (`visit_id`) REFERENCES `visits` (`id`),
  CONSTRAINT `fk_ordered_analyte_results_worksheet_id` FOREIGN KEY (`worksheet_id`) REFERENCES `worksheets` (`id`)
);

DROP TABLE IF EXISTS `ordered_tests`;
CREATE TABLE `ordered_tests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `visit_id` int NOT NULL,
  `test_id` int NOT NULL,
  `processing_branch` int NOT NULL,
  `test_name` varchar(255) NOT NULL,
  `tat_date` datetime DEFAULT NULL,
  `report_date` datetime DEFAULT NULL,
  `is_stat` tinyint DEFAULT '0',
  `status` varchar(255) NOT NULL,
  `tenant_id` int NOT NULL,
  `branch_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ordered_tests_tenant_id` (`tenant_id`),
  KEY `fk_ordered_tests_branch_id` (`branch_id`),
  KEY `fk_ordered_tests_visit_id` (`visit_id`),
  KEY `fk_ordered_tests_test_id` (`test_id`),
  CONSTRAINT `fk_ordered_tests_branch_id` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`),
  CONSTRAINT `fk_ordered_tests_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`),
  CONSTRAINT `fk_ordered_tests_test_id` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `fk_ordered_tests_visit_id` FOREIGN KEY (`visit_id`) REFERENCES `visits` (`id`)
);

DROP TABLE IF EXISTS `page_actions`;
CREATE TABLE `page_actions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `params` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_page_actions_page_id` (`page_id`),
  CONSTRAINT `fk_page_actions_page_id` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`)
);

DROP TABLE IF EXISTS `pages`;
CREATE TABLE `pages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `patient_samples`;
CREATE TABLE `patient_samples` (
  `id` int NOT NULL AUTO_INCREMENT,
  `visit_id` int NOT NULL,
  `barcode_number` varchar(255) NOT NULL,
  `sample_id` int NOT NULL,
  `container_id` int NOT NULL,
  `collected_branch_id` int NOT NULL,
  `processing_branch_id` int NOT NULL,
  `collected_date` datetime DEFAULT NULL,
  `active` tinyint DEFAULT '1',
  `parent_sample_id` int DEFAULT '0',
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_patient_samples_sample_id` (`sample_id`),
  KEY `fk_patient_samples_collected_branch_id` (`collected_branch_id`),
  KEY `fk_patient_samples_tenant_id` (`tenant_id`),
  KEY `fk_patient_samples_container_id` (`container_id`),
  KEY `fk_patient_samples_visit_id` (`visit_id`),
  CONSTRAINT `fk_patient_samples_collected_branch_id` FOREIGN KEY (`collected_branch_id`) REFERENCES `branches` (`id`),
  CONSTRAINT `fk_patient_samples_container_id` FOREIGN KEY (`container_id`) REFERENCES `containers` (`id`),
  CONSTRAINT `fk_patient_samples_sample_id` FOREIGN KEY (`sample_id`) REFERENCES `samples` (`id`),
  CONSTRAINT `fk_patient_samples_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`),
  CONSTRAINT `fk_patient_samples_visit_id` FOREIGN KEY (`visit_id`) REFERENCES `visits` (`id`)
);

DROP TABLE IF EXISTS `patients`;
CREATE TABLE `patients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `title` varchar(10) NOT NULL,
  `gender` varchar(25) NOT NULL,
  `dob` datetime NOT NULL,
  `age` varchar(25) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city_id` int NOT NULL,
  `state_id` int NOT NULL,
  `country_id` int NOT NULL,
  `pincode` varchar(10) DEFAULT NULL,
  `is_calculated_dob` tinyint DEFAULT '0',
  `patient_number` varchar(255) NOT NULL,
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_patients_tenant_id` (`tenant_id`),
  KEY `fk_patients_city_id` (`city_id`),
  KEY `fk_patients_state_id` (`state_id`),
  KEY `fk_patients_country_id` (`country_id`),
  CONSTRAINT `fk_patients_city_id` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`),
  CONSTRAINT `fk_patients_country_id` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`),
  CONSTRAINT `fk_patients_state_id` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`),
  CONSTRAINT `fk_patients_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `rates`;
CREATE TABLE `rates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_prices_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_prices_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `refering_doctors`;
CREATE TABLE `refering_doctors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `qualification` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_refering_doctors_tenant_id_code` (`code`,`tenant_id`),
  KEY `fk_refering_doctors_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_refering_doctors_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `role_menus`;
CREATE TABLE `role_menus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `menu_id` int NOT NULL,
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_role_menus_tenant_id` (`tenant_id`),
  KEY `fk_role_menus_role_id` (`role_id`),
  KEY `fk_role_menus_menu_id` (`menu_id`),
  CONSTRAINT `fk_role_menus_menu_id` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`),
  CONSTRAINT `fk_role_menus_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `fk_role_menus_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `role_page_actions`;
CREATE TABLE `role_page_actions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `page_action_id` int NOT NULL,
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_role_page_actions_tenant_id` (`tenant_id`),
  KEY `fk_role_page_actions_role_id` (`role_id`),
  KEY `fk_role_page_actions_page_action_id` (`page_action_id`),
  CONSTRAINT `fk_role_page_actions_page_action_id` FOREIGN KEY (`page_action_id`) REFERENCES `page_actions` (`id`),
  CONSTRAINT `fk_role_page_actions_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `fk_role_page_actions_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_roles_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_roles_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `samples`;
CREATE TABLE `samples` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `short_code` varchar(10) DEFAULT NULL,
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_samples_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_samples_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `service_groups`;
CREATE TABLE `service_groups` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `sequence_no` int NOT NULL,
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_service_groups_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_service_groups_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `states`;
CREATE TABLE `states` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `country_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_states_country_id_name` (`name`,`country_id`),
  KEY `fk_states_country_id` (`country_id`),
  CONSTRAINT `fk_states_country_id` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`)
);

DROP TABLE IF EXISTS `sub_departments`;
CREATE TABLE `sub_departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `short_code` varchar(10) DEFAULT NULL,
  `sequence_no` int DEFAULT '0',
  `active` tinyint DEFAULT '1',
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sub_departments_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_sub_departments_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `tenant_number_patterns`;
CREATE TABLE `tenant_number_patterns` (
  `id` int NOT NULL AUTO_INCREMENT,
  `number_pattern_id` int NOT NULL,
  `pattern` varchar(255) NOT NULL,
  `is_reset` tinyint DEFAULT '0',
  `reset_when` varchar(25) DEFAULT NULL,
  `reset_by` int DEFAULT NULL,
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tenant_number_patterns_number_pattern_id` (`number_pattern_id`),
  KEY `fk_tenant_number_patterns_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_tenant_number_patterns_number_pattern_id` FOREIGN KEY (`number_pattern_id`) REFERENCES `number_patterns` (`id`),
  CONSTRAINT `fk_tenant_number_patterns_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `tenants`;
CREATE TABLE `tenants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `active` tinyint DEFAULT '1',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `test_branch_mapping`;
CREATE TABLE `test_branch_mapping` (
  `id` int NOT NULL AUTO_INCREMENT,
  `test_id` int NOT NULL,
  `method_id` int NOT NULL,
  `service_group_id` int NOT NULL,
  `department_id` int NOT NULL,
  `equipment_id` int NOT NULL,
  `uom_id` int NOT NULL,
  `active` tinyint DEFAULT '1',
  `tenant_id` int NOT NULL,
  `branch_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_test_branch_mapping_tenant_id` (`tenant_id`),
  KEY `fk_test_branch_mapping_branch_id` (`branch_id`),
  KEY `fk_test_branch_mapping_test_id` (`test_id`),
  KEY `fk_test_branch_mapping_equipment_id` (`equipment_id`),
  KEY `fk_test_branch_mapping_method_id` (`method_id`),
  KEY `fk_test_branch_mapping_service_group_id` (`service_group_id`),
  KEY `fk_test_branch_mapping_department_id` (`department_id`),
  KEY `fk_test_branch_mapping_uom_id` (`uom_id`),
  CONSTRAINT `fk_test_branch_mapping_branch_id` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`),
  CONSTRAINT `fk_test_branch_mapping_department_id` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
  CONSTRAINT `fk_test_branch_mapping_equipment_id` FOREIGN KEY (`equipment_id`) REFERENCES `equipments` (`id`),
  CONSTRAINT `fk_test_branch_mapping_method_id` FOREIGN KEY (`method_id`) REFERENCES `methods` (`id`),
  CONSTRAINT `fk_test_branch_mapping_service_group_id` FOREIGN KEY (`service_group_id`) REFERENCES `service_groups` (`id`),
  CONSTRAINT `fk_test_branch_mapping_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`),
  CONSTRAINT `fk_test_branch_mapping_test_id` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `fk_test_branch_mapping_uom_id` FOREIGN KEY (`uom_id`) REFERENCES `uom` (`id`)
);

DROP TABLE IF EXISTS `tests`;
CREATE TABLE `tests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `billing_name` varchar(255) NOT NULL,
  `internal_name` varchar(255) NOT NULL,
  `report_name` varchar(255) NOT NULL,
  `short_code` varchar(10) DEFAULT NULL,
  `active` tinyint DEFAULT '1',
  `tenant_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tests_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_tests_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `uom`;
CREATE TABLE `uom` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `visits`;
CREATE TABLE `visits` (
  `id` int NOT NULL AUTO_INCREMENT,
  `patient_id` int NOT NULL,
  `refering_doctor_id` int DEFAULT NULL,
  `refering_doctor_name` varchar(255) DEFAULT NULL,
  `visit_number` varchar(255) DEFAULT NULL,
  `external_visit_number` varchar(255) DEFAULT NULL,
  `external_patient_number` varchar(255) DEFAULT NULL,
  `tenant_id` int NOT NULL,
  `branch_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_visits_tenant_id` (`tenant_id`),
  KEY `fk_visits_branch_id` (`branch_id`),
  KEY `fk_visits_patient_id` (`patient_id`),
  KEY `fk_visits_refering_doctor_id` (`refering_doctor_id`),
  CONSTRAINT `fk_visits_branch_id` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`),
  CONSTRAINT `fk_visits_patient_id` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`),
  CONSTRAINT `fk_visits_refering_doctor_id` FOREIGN KEY (`refering_doctor_id`) REFERENCES `refering_doctors` (`id`),
  CONSTRAINT `fk_visits_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);

DROP TABLE IF EXISTS `worksheets`;
CREATE TABLE `worksheets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `worksheet_number` varchar(255) NOT NULL,
  `details` json NOT NULL,
  `tenant_id` int NOT NULL,
  `branch_id` int NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_worksheets_branch_id` (`branch_id`),
  KEY `fk_worksheets_tenant_id` (`tenant_id`),
  CONSTRAINT `fk_worksheets_branch_id` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`),
  CONSTRAINT `fk_worksheets_tenant_id` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`)
);
