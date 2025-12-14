CREATE TABLE `newsletter_editions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` text NOT NULL,
	`html_content` text,
	`subject` varchar(255) NOT NULL,
	`status` enum('draft','sent') NOT NULL DEFAULT 'draft',
	`sent_at` timestamp,
	`recipient_count` int DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `newsletter_editions_id` PRIMARY KEY(`id`)
);
