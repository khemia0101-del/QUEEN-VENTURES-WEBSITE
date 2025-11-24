CREATE TABLE `grantflow_waitlist` (
	`id` int AUTO_INCREMENT NOT NULL,
	`organization_name` varchar(255) NOT NULL,
	`contact_name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`organization_type` varchar(100),
	`number_of_staff` int,
	`current_grant_process` text,
	`interests` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `grantflow_waitlist_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mission_forward_applications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`full_name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`applicant_type` enum('foster_youth','veteran') NOT NULL,
	`age` int,
	`location` varchar(255),
	`housing_preference` enum('georgia','hawaii','either'),
	`tech_experience` text,
	`career_goals` text,
	`additional_info` text,
	`status` enum('pending','reviewed','accepted','rejected') NOT NULL DEFAULT 'pending',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mission_forward_applications_id` PRIMARY KEY(`id`)
);
