# Harbor: Product Guide

> Fictional reference material for the hiring assignment. Harbor is not a real product. All facts in this document are invented for this exercise.

## What Harbor does

Harbor is a shared workspace for small teams to collect customer feedback, group related requests, and plan product improvements.

A workspace contains feedback records, collections, and a roadmap. Each feedback record has a title, description, source, and status. Collections group feedback by topic. A roadmap item describes a planned improvement and can link to several feedback records.

Harbor does not automatically promise delivery dates to customers. A roadmap status describes the team's current intent, not a contractual commitment.

## Getting started

1. Create a workspace and choose its name.
2. Invite teammates and assign their roles.
3. Create a collection, such as "Onboarding feedback".
4. Add feedback manually or import it from a CSV file.
5. Link related feedback to a roadmap item.

A workspace starts with a private roadmap. An owner can enable a public, read-only roadmap. Feedback descriptions and customer email addresses are never included on the public roadmap.

## Roles and permissions

| Role   | Permissions                                                                                     |
| ------ | ----------------------------------------------------------------------------------------------- |
| Owner  | Manage billing, workspace settings, members, feedback, and roadmap items; delete the workspace. |
| Editor | Create and update feedback, collections, and roadmap items; cannot manage billing or members.   |
| Viewer | Read workspace content; cannot create or change records.                                        |

A workspace must have at least one owner. An owner must transfer ownership before leaving if they are the only owner.

## Feedback import

CSV imports require the columns `title` and `description`. Optional columns are `customer_email` and `source`.

Each import accepts at most 500 rows. A title must contain between 1 and 120 characters. Rows with missing required fields are skipped, and the import summary lists the skipped rows and their reasons.

Importing the same file twice creates duplicate records. Harbor does not currently deduplicate imports. Teams should review the import summary before retrying.

## Roadmap statuses

- **Exploring:** The team is investigating the problem; no implementation commitment has been made.
- **Planned:** The team intends to work on the item, but no delivery date is guaranteed.
- **In progress:** Implementation has started.
- **Released:** The improvement is available to customers.

Only owners and editors can change roadmap statuses.

## Notifications and integrations

Harbor supports email notifications and a Slack integration. The Slack integration posts a message when a roadmap item changes status. It does not import Slack conversations or allow users to edit Harbor records from Slack.

Users can choose immediate email notifications or a daily summary. The daily summary is sent at 09:00 UTC and only includes changes the user has permission to view.

## Current limitations

Harbor has no native mobile application, offline mode, or public API. Users access it through a web browser.

This guide does not define subscription prices, support response times, or data retention periods. Those topics are covered in the separate pricing and support documents.
