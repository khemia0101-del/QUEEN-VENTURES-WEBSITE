CREATE TABLE `donations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`stripe_payment_intent_id` varchar(255) NOT NULL,
	`stripe_customer_id` varchar(255),
	`donor_name` varchar(255),
	`donor_email` varchar(320) NOT NULL,
	`amount_cents` int NOT NULL,
	`currency` varchar(3) NOT NULL DEFAULT 'usd',
	`donation_type` enum('one_time','recurring') NOT NULL DEFAULT 'one_time',
	`status` enum('pending','succeeded','failed') NOT NULL DEFAULT 'pending',
	`metadata` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `donations_id` PRIMARY KEY(`id`),
	CONSTRAINT `donations_stripe_payment_intent_id_unique` UNIQUE(`stripe_payment_intent_id`)
);
--> statement-breakpoint
CREATE TABLE `newsletter_subscriptions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`name` varchar(255),
	`status` enum('active','unsubscribed') NOT NULL DEFAULT 'active',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `newsletter_subscriptions_id` PRIMARY KEY(`id`),
	CONSTRAINT `newsletter_subscriptions_email_unique` UNIQUE(`email`)
);
