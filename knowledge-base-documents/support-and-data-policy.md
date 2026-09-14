# Harbor: Support and Data Policy

> Fictional reference material for the hiring assignment. Harbor is not a real product. The contact address and all policies below are invented for this exercise.

## Contact and support hours

Contact support at `support@harbor.example`. This is a fictional address for the exercise; do not send email to it.

Support operates Monday through Friday, 09:00–17:00 UTC, excluding January 1 and December 25. There is no telephone support or 24/7 support service.

| Plan     | Initial response target |
| -------- | ----------------------- |
| Starter  | Within 3 business days  |
| Team     | Within 1 business day   |
| Business | Within 4 support hours  |

A support hour is one hour within the support schedule. For example, a Business request received at 16:00 UTC on an ordinary Friday has an initial response target of 12:00 UTC the following Monday, assuming neither day is an excluded holiday.

These are initial response targets, not guaranteed resolution times or a contractual service-level agreement.

## What to include in a request

Provide the workspace name, a description of the problem, the time it occurred with a timezone, and steps to reproduce it. Include an error message or screenshot if available.

Never send passwords, payment card details, API keys, or authentication tokens. Support will not ask for those secrets.

Billing and refund requests must come from a workspace owner. Include the invoice identifier, but not full payment card details. Refund eligibility is defined in the separate pricing document.

## Troubleshooting

### A CSV import skipped some rows

Check that every row has a non-empty `title` and `description`, and that each title is at most 120 characters. An individual file may contain at most 500 rows.

Review the skipped-row report and retry only corrected rows. Reimporting rows that already succeeded creates duplicates because imports are not deduplicated.

### A teammate cannot edit feedback

Ask an owner to check the teammate's role. Viewers can read records but cannot edit them. Editors and owners can edit feedback.

### Slack notifications stopped

Check that the workspace is on Team or Business and that the Slack integration is still connected. Starter does not include the integration. Slack messages are sent for roadmap status changes, not for every feedback edit.

## Data hosting and use

Harbor stores primary workspace data and backups in the European Union. This policy does not identify a specific hosting vendor or country, and there is no customer-selectable hosting region.

Workspace content is encrypted in transit and at rest. Harbor does not use customer workspace content to train AI models.

This document makes no claim of SOC 2 certification, HIPAA compliance, or any other certification. Requests for information not stated here should be acknowledged as unanswered by the provided material.

## Exports

Owners can export workspace feedback as CSV on every plan. An export includes feedback titles, descriptions, sources, statuses, and customer email addresses where present.

Exports do not include billing information or roadmap change history. Editors and viewers cannot initiate exports.

## Deletion and retention

Deleting an individual feedback record removes it from the active workspace immediately. There is no self-service undo. The record may remain in rolling backups for up to 30 days.

Only an owner can request workspace deletion. After confirmation, the workspace becomes inaccessible immediately. Primary workspace data is deleted within seven calendar days, and remaining backup copies expire within 30 calendar days of confirmation.

Deleting a workspace also cancels its subscription and prevents future renewals. It does not automatically create a refund. Billing records are retained for seven years and are not included in workspace content deletion.

Canceling a subscription alone does not delete workspace data. See the pricing document for the plan and feature changes that follow cancellation.
