# Practice Set 19

Source: [https://skillcertpro.com/az-104-exam-questions/19/](https://skillcertpro.com/az-104-exam-questions/19/)
Total questions: 60

---

### Question 1

You’re applying locks to protect the same RGs used in Q1. Requirements are below.

“To meet **RG-Prod**’s goal, configure a __________ lock at the **resource group** scope.”

**Options:**

- **A.** A. Read-only
- **B.** B. Delete ✅
- **C.** C. None
- **D.** D. Policy

**Correct answer:** B

**Explanation:**

Choice B is correct. A **Delete** (CanNotDelete) lock at the RG scope **blocks deletes** on the group **and** its resources while **still allowing updates**, which fits RG-Prod’s requirement to prevent accidental removals without freezing deployments.

Why the other options are incorrect

A: **Read-only** blocks **writes and deletes**, stopping normal updates — too restrictive.

C: **None** leaves high delete risk unmitigated.

D: **Policy** is not a lock; it doesn’t deterministically block deletes across all resource types.

---

### Question 2

You have a Microsoft Entra tenant that contains a user named User1 and a group named Group1.
You need to enable User1 the ability to add members to Group1. Your solution should minimize administrative effort.
What should you do?

**Options:**

- **A.** A. Add Group1 to new administrative unit and assign built-in Microsoft Entra role to User1
- **B.** B. Assign custom Microsoft Entra role to User1
- **C.** C. Modify Group1 owners ✅
- **D.** D. Modify Group1 properties

**Correct answer:** C

**Explanation:**

The simplest and least administrative way to let User1 add members to Group1 is to make User1 an owner of Group1. Microsoft states that group owners manage group membership and can add or remove members from the group. Microsofts PowerShell documentation also says group owners can modify the group.
This is less effort than creating an administrative unit or building a custom role. Administrative units are used to scope administrative permissions, and Microsoft notes that adding a group to an administrative unit brings the group itself into the administrative scope, not the members of the group. A custom role would work in some cases, but it requires extra design and assignment work that the question explicitly says to minimize.
Why the other options are incorrect:
 A. Add Group1 to new administrative unit and assign built-in Microsoft Entra role to User1  This is more complex than necessary. Administrative units are intended to scope admin permissions, and Microsoft says that putting a group into an administrative unit brings the group into scope, but not the groups members. That means this is not the simplest way to let one user manage membership for one specific group.
 B. Assign custom Microsoft Entra role to User1  A custom role can be built for group management scenarios, but it requires creating and maintaining a custom permission set. Since group ownership already provides the needed ability to manage membership for that specific group, a custom role adds unnecessary administrative overhead.
 D. Modify Group1 properties  Changing group properties does not by itself delegate membership management to User1. The relevant control is ownership, because Microsoft ties the ability to add or remove members to the group owner role.

---

### Question 3

User Ops-Lead is a member of group RG-Owners, which has the Owner role on network-prod-rg. A deny assignment from a managed application in that RG denies Delete on virtual network resources. Ops-Lead also has a direct Reader assignment at the subscription. Ops-Lead attempts to delete a VNet in network-prod-rg.
What is the result?

**Options:**

- **A.** A. Delete succeeds because Owner overrides Reader
- **B.** B. Delete fails because Reader at subscription blocks delete
- **C.** C. Delete succeeds because group Owner overrides deny
- **D.** D. Delete fails because the deny assignment blocks delete ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. In Azure RBAC, deny assignments take precedence over allow assignments, regardless of whether the allow is direct or via group, and regardless of higher-level Reader/Contributor/Owner roles. Because a deny on Delete exists at the RG affecting VNets, effective permissions exclude Delete for Ops-Lead, and the operation failseven though the user is in an Owner group. Reader at the subscription neither adds nor removes that deny; it simply grants read elsewhere.
Why the other options are incorrect
A: Owner does not override a deny; deny wins.
B: The Reader role doesnt block delete when an allow existsdeny is the blocking factor, not Reader.
C: Group membership doesnt bypass denies; all allows are evaluated and then deny removes the operation from the effective set.

---

### Question 4

You operate two Log Analytics workspaces (one per subscription). You need a single query to analyze HTTP 5xx rate for your API across both, grouped by cluster and service, over the last 30 minutes, with a 1-minute bin and a top-N view by failure rate. You prefer native KQL (no exports).
Requirements
 Cross-workspace query
 Group by cluster/service, bin 1m
 Calculate rate (5xx per minute)
 Show top offending services
Which approach fits best?

**Options:**

- **A.** A. Build a workbook pie chart per workspace
- **B.** B. Create a metric alert on 5xx count
- **C.** C. Use a cross-workspace KQL query (workspace(), union) with summarize by bin(1m) and compute rate ✅
- **D.** D. Export to Event Hub and process externally

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure Monitor Logs supports cross-workspace KQL using workspace(‘name‘) or workspaceResourceId() and union. Query AppRequests/AppServiceHTTPLogs (or your table), filter 5xx, then summarize count() by cluster, service, bin(1m) to compute a per-minute rate; finish with top/order by to surface the worst offenders. This stays in-platform, works over multiple workspaces, and is parameterizable in workbooks/alerts later.
Why the other options are incorrect
A: Separate charts dont give a single, correlated view or rate math.
B: Metric alerts wont express custom KQL rate logic across multiple workspaces.
D: Export adds operational friction and latency versus a native query.

---

### Question 5

An ingestion service occasionally overwrites existing blobs and sometimes deletes the current blob before re-uploading. You need automatic protection against these mistakes, the ability to restore prior content without backups, and a way to age-out old versions after one year to control costs  all policy-driven, no app changes.
Which option should you choose?

**Options:**

- **A.** A. Enable soft delete only
- **B.** B. Enable snapshots only
- **C.** C. Enable point-in-time restore only
- **D.** D. Enable blob versioning, then use lifecycle rules to delete noncurrent versions older than 365 days ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Blob versioning automatically creates a new version whenever a blob is overwritten or deleted, preserving the prior content as a noncurrent version. That gives you a built-in time-ordered history with no application changes: to recover, you simply promote a previous version (or copy it over the current). Pairing versioning with lifecycle rules lets you expire noncurrent versions beyond 365 days, which keeps storage growth in check while retaining enough history for audits and recovery. This combination directly addresses overwrite protection, delete protection, and cost control in a single, service-managed design.
Why the other options are incorrect
A: Soft delete can preserve deleted blobs for a retention window, but it doesnt capture overwrites and doesnt maintain a versioned history for fine-grained rollback.
B: Snapshots require explicit creation and management; they wont automatically capture every overwrite/delete event, and large-scale governance is harder than policy-driven version aging.
C: Point-in-time restore rolls a container or prefix back in bulk; its powerful for broad recovery but not a substitute for per-blob version history and targeted restores. It also doesnt by itself provide version aging controls.

---

### Question 6

Youre updating an ARM template for a NIC. The NIC must attach to a subnet in a different resource group. You want a portable template that computes the subnet ID (no hardcoded IDs passed in).
To compute the cross-RG subnet ID for ipConfigurations[*].properties.subnet.id, use __________ with the resource group name, type, and names.

**Options:**

- **A.** A. concat()
- **B.** B. resourceId() ✅
- **C.** C. reference()
- **D.** D. parameters()

**Correct answer:** B

**Explanation:**

Choice B is correct. resourceId() builds the fully qualified resource ID in a context-aware way, including when the target lives in a different resource group. The cross-RG form accepts the RG name explicitly:
“[resourceId(parameters(‘vnetRg‘),
  ‘Microsoft.Network/virtualNetworks/subnets‘,
  parameters(‘vnetName‘), ‘app‘)]“
This keeps the template portable, avoids brittle string concatenation, and ensures the NIC receives a valid ID regardless of deployment target.
Why the other options are incorrect
A: concat() produces strings but is error-prone for ARM IDs (slashes, casing, subscription).
C: reference() retrieves runtime properties of an existing resource; you still need the ID first.
D: parameters() just returns a value; it doesnt construct the canonical ID.

---

### Question 7

Youve created private endpoints and private DNS zones. Now on-prem clients must resolve the Azure private zones (e.g., privatelink.blob.core.windows.net) without custom DNS servers in Azure VMs. You want a managed, highly available resolver in Azure that accepts queries from on-prem and forwards to Azure Private DNS.
To let on-prem resolve Azure private zones in a managed way, deploy an Azure DNS __________ and point on-prem conditional forwarders to its inbound endpoint.

**Options:**

- **A.** A. Private DNS zone only
- **B.** B. Private Resolver ✅
- **C.** C. Public DNS zone
- **D.** D. Custom hosts files

**Correct answer:** B

**Explanation:**

Choice B is correct. Azure DNS Private Resolver provides inbound endpoints that accept DNS queries from on-prem over your VPN/ER and rulesets that forward to Azure Private DNS. This removes the need for VM-based DNS forwarders, scales with the platform, and keeps resolution authoritative even as you add more private zones. Use outbound endpoints + rulesets if you also need conditional forwarding back to on-prem.
Why the other options are incorrect
A: A private DNS zone alone doesnt receive queries from on-prem; you still need a resolver path.
C: A public zone publishes to the Internetopposite of the private endpoint design.
D: Hosts files dont scale, dont update automatically, and break the FQDN-to-PE mapping model.

---

### Question 8

A Bicep file must add a subnet to a VNet thats already in production. You must not recreate or modify the VNet, and you want the declaration to be minimal and safe. Youll keep the subnet as a child of that VNet for clear scoping.
Requirements
 Treat the VNet as pre-existing
 Create only the subnet
 Keep a clear parent/child relationship
Which option should you choose?

**Options:**

- **A.** A. parent
- **B.** B. targetScope
- **C.** C. existing ✅
- **D.** D. scope

**Correct answer:** C

**Explanation:**

Choice C is correct. Applying existing to the VNet resource tells Bicep to reference it rather than create it. You then declare the subnet as a child (either via the composite name ‘/‘ or with an explicit parent) so the deployment creates only the subnet. This combination provides safety (no unintended VNet changes), clarity (hierarchical modeling), and idempotence (re-runs dont touch the VNet).
Why the other options are incorrect
A: parent expresses hierarchy but doesnt prevent VNet creation by itself.
B: targetScope sets the deployment scope (tenant/subscription/RG), unrelated to resource existence.
D: scope directs where a module or extension runs; it doesnt mark the VNet as existing.

---

### Question 9

You must map the apex fabrikam.com to a Web App. Your DNS provider does not support ALIAS/ANAME at the zone root. You need a supported mapping that includes domain verification and you accept that the IP may need re-checking after major platform changes (e.g., plan/region move).
What should you configure?

**Options:**

- **A.** A. CNAME at apex to app.azurewebsites.net
- **B.** B. SRV record to the app
- **C.** C. TXT record only
- **D.** D. A record to the apps external IP plus the TXT verification record ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Without ALIAS/ANAME support at the apex, the supported path is:
1. Create an A record pointing the root (fabrikam.com) to the Web Apps external IP (from the custom domains blade).
2. Add the TXT verification record so App Service can validate domain ownership and allow the binding.
This combination routes traffic and proves ownership. It keeps your DNS provider unchanged and meets todays constraints; if you later move app plans or regions (events that can change the IP), you simply update the A record. If you ever adopt a provider with ALIAS/ANAME, you can switch to a CNAME-like apex, eliminating IP tracking.
Why the other options are incorrect
A: A CNAME at the apex is not permitted by most DNS providers; thats what ALIAS/ANAME is for.
B: SRV is for service discovery, not standard web hostnames; App Service wont use it for custom domain mapping.
C: A TXT record alone only verifies, it does not route traffic.

---

### Question 10

Multiple apps use Shared Key to call Blob/Queue. You must rotate without downtime and avoid mass redeploys. Central secrets are already stored in Key Vault and can be updated once.
To rotate safely with zero downtime, use the __________ approach: switch clients to the alternate key, then regenerate the old key.

**Options:**

- **A.** A. Disable Shared Key access
- **B.** B. Regenerate both keys at once
- **C.** C. Dual-key rolling rotation ✅
- **D.** D. DNS failover

**Correct answer:** C

**Explanation:**

Choice C is correct. Storage accounts have two keys. Update clients (via Key Vault reference or config) to use, for example, key2; once traffic confirms, regenerate key1; later switch back and regenerate key2. This alternating pattern preserves service continuity and provides a recovery path if a rotation step goes wrong. It also supports gradual rollout across many apps with a single central secret reference.
Why the other options are incorrect
A: Disabling Shared Key breaks clients before you migrate them to SAS or AAD; its a follow-on hardening step, not rotation.
B: Regenerating both keys risks total outageno valid credentials remain for lagging clients.
D: DNS is unrelated to credential rotation.

---

### Question 11

Contoso has an Azure App Service named **webapp1** with two deployment slots: **webapp1-prod** (production) and **webapp1-test** (staging). Developers push an update for **App1** to **Git1**. You must ensure the update is fully tested before it’s made available to users.

**Question (Select TWO):** Which two actions should you perform?

**Options:**

- **A.** A. Stop webapp1-prod
- **B.** B. Deploy the update to webapp1-prod, and then test the update
- **C.** C. Deploy the update to webapp1-test, and then test the update ✅
- **D.** D. Stop webapp1-test
- **E.** E. Create a new slot and clone webapp1-prod to it
- **F.** F. Swap the slots ✅

**Correct answer:** C, F

**Explanation:**

Choice C and F are correct.

Deploying the update to **webapp1-test** lets you validate the new build in a staging slot that mirrors production configuration without affecting live users. After verification, performing a **slot swap** promotes the tested bits into **webapp1-prod** with minimal downtime and preserves warm instances and configuration stickiness supported by slots.

Why the others are incorrect

A: Stopping production isn’t required to test or to swap; slot swaps are designed to avoid downtime.

B: Deploying directly to production bypasses the staging/test step and risks user impact.

D: Stopping the test slot prevents you from validating the update.

E: Creating another slot is unnecessary when a staging slot already exists and adds complexity.

---

### Question 12

You have an Azure subscription named Subscription1.

In Subscription1, you create an alert rule named Alert1.

The Alert1 action group is configured as shown in the following exhibit.

Alert1 alert criteria is triggered every minute.

**Question:**

Based on this configuration, complete the statement:

“The number of email messages that Alert1 will send in an hour _____.”

**Options:**

- **A.** A. 0
- **B.** B. 4
- **C.** C. 6
- **D.** D. 12
- **E.** E. 60 ✅

**Correct answer:** E

**Explanation:**

Choice E is correct.

Because the alert criteria triggers **once every minute**, the rule executes **60 times in one hour**. Each trigger invokes the action group and sends an email to the configured recipients, resulting in **60 emails per hour**.

Why the others are incorrect

A–D: These values underestimate the total number of alerts. Azure Monitor runs on the schedule specified in the alert rule configuration, so a 1-minute frequency produces one notification per minute unless throttling or suppression rules are explicitly configured (which this scenario does not mention).

---

### Question 13

You have an Azure subscription that contains the vaults shown in the following table:

You deploy the virtual machines shown in the following table:

You have the backup policies shown in the following table:

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM1 can be backed up by using Policy1.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Choice A is correct.

Azure Backup supports **Windows VMs with Azure Disk Encryption** when backed up via a **Recovery Services vault** using a **Standard backup policy**. There are no restrictions for encrypted disks in this configuration, as long as ADE uses supported key and secret management in Azure Key Vault and the VM resides in the same region as the vault.

Why the other answer is incorrect

B: “No” would only be valid if the VM used an unsupported configuration—such as unmanaged disks, unsupported OS, or a non-Recovery Services vault (e.g., a Backup vault with Enhanced policy and unsupported OS). That’s not the case here.

---

### Question 14

Your company purchases a new Azure subscription.

You create a file named Deploy.json as shown in the below exhibit.

You connect to the subscription and run the following cmdlet:

New-AzDeployment -Location westus -TemplateFile “deploy.json”

For the statement below, select Yes if the statement is true. Otherwise, select No.

**“You can deploy a virtual machine to RG2.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Choice No is correct.

A **ReadOnly lock** on **RG2** blocks all **write operations** (PUT/PATCH/DELETE) on the resource group and everything inside it. Because an ARM/Bicep deployment into a resource group performs **write operations** (for example, creating Microsoft.Compute/virtualMachines, updating NICs, writing Microsoft.Resources/deployments records), the deployment will **fail** while the lock is in place. The lock is **inherited** by all child resources, so it doesn’t matter that you’re only trying to add a new VM—the lock on the RG prevents it.

Key points to remember

- **Scope &amp; inheritance:** A lock applied at the **resource group** level applies to **all resources** within that group.

- **Operation types affected:** ReadOnly allows GET/READ operations only; **creates, updates, deletes, and most state-changing POSTs** (like Start/Stop on a VM) are blocked.

- **RBAC vs. locks:** Having **Owner** or other high privileges does **not** bypass a management lock. Even owners must **remove the lock** (a write on the lock resource) before making changes.

- **Template ordering pitfall:** If your template **adds a ReadOnly lock early** and then tries to deploy more resources **in the same run**, subsequent writes will fail. Apply the lock **after** all resources are successfully deployed, or use **separate deployments**.

- **When you want changes but no deletion:** Use **CanNotDelete** instead of ReadOnly if your goal is to prevent accidental deletes while still allowing updates and deployments.

How to proceed:

- Temporarily **remove the ReadOnly lock**, deploy the VM, then **reapply** the lock.

- Better: run a **two-phase pipeline** — phase 1 deploys/updates resources; phase 2 applies the lock (idempotent).

- If ongoing updates are expected, consider switching to **CanNotDelete** and use **policy/approval** for change control rather than a blanket ReadOnly lock.

---

### Question 15

You have an Azure subscription that contains the vaults shown in the following table.

You create a storage account that contains the resources shown in the following table.

You need to determine to which vault you can **back up cont1**.

**Options:**

- **A.** A. Backup1 only ✅
- **B.** B. Recovery1 only
- **C.** C. Backup1 or Recovery1
- **D.** D. Cannot be backed up to Backup1 or Recovery1

**Correct answer:** A

**Explanation:**

Choice A is correct.

A **Backup vault** supports **Azure Blobs backup**, allowing operational backups directly from Blob storage accounts. It provides snapshot-based protection, enabling point-in-time recovery without requiring application or file-level agents. Because **Backup1** is a Backup vault, it can protect **cont1** (the blob container).

A **Recovery Services vault**, such as **Recovery1**, does **not** support blob backups. It’s used for **workload-level protection** like **Azure virtual machines, Azure Files, SQL in Azure VMs, and on-premises workloads**. Blob backup isn’t available in Recovery Services vaults since they use a different management model and data plane.

Thus, **only Backup1** can be used to back up **cont1**.

Why the others are incorrect

B: Recovery1 can’t back up Blob containers—it only handles VM and workload-level backups.

C: Blob backup is available through Backup vaults only, not Recovery Services vaults.

D: Incorrect because Backup1 (a Backup vault) fully supports Blob backup.

---

### Question 16

A team has accidentally deleted both containers and blobs several times during releases. You want a single, account-level safety net that lets admins undo deletes for 30 days with no application changes. It must protect container deletes and blob deletes alike so rollbacks are fast and self-service.
To enable 30-day recovery for both container deletes and blob deletes, turn on __________ and set retention to 30 days.

**Options:**

- **A.** A. Soft delete (blobs and containers) ✅
- **B.** B. Blob versioning
- **C.** C. Point-in-time restore
- **D.** D. Change feed

**Correct answer:** A

**Explanation:**

Choice A is correct. Soft delete for blobs preserves deleted blob objects for a retention window, and container soft delete does the same at the container level. Together, they give a unified undelete path across the account: admins can restore a deleted container (bringing back its contents as they existed at deletion) and can also restore individual blobs that were deleted within the retention period. Because this is handled by the storage service, applications dont need code changes and your rollback becomes a simple management operation rather than a data restore pipeline.
Why the other options are incorrect
B: Versioning protects against overwrites and lets you roll back to earlier versions, but it does not restore a deleted container and doesnt give a one-click undelete for a blob that was hard-deleted without versions retained.
C: Point-in-time restore can revert blob states inside an existing container to an earlier time, but it doesnt recover a deleted container; you still need container soft delete for that.
D: Change feed provides an immutable event log of changes; its great for auditing and downstream processing, but it doesnt provide recovery on its own.

---

### Question 17

You’re consolidating governance under a single Entra tenant called **Tailwind-Prod**. Three existing subscriptions must be handled differently based on billing and identity constraints.

Subscriptions

For **Sub-B**, which option should you choose?

**Options:**

- **A.** A. Change directory ✅
- **B.** B. Transfer billing ownership
- **C.** C. Rename subscription
- **D.** D. Move resources to a new subscription

**Correct answer:** A

**Explanation:**

Choice A is correct. **Change directory** re-homes the **entire subscription** into the **Tailwind-Prod** tenant so it inherits that tenant’s **policies, PIM, and RBAC**, while **preserving existing resources** and their IDs. It avoids app redeploys and keeps data paths intact. You must satisfy prerequisites (e.g., supported offer type; remove unsupported features like certain enterprise apps/managed identities that block the move), but when feasible it’s the **least disruptive** way to consolidate **governance and identity** at the subscription level.

Why the other options are incorrect

B: **Billing transfer** changes **who pays**, not the **tenant** that governs RBAC/PIM/Policy; Sub-B would remain in Partner-Ops.

C: **Rename** affects only display name and doesn’t re-scope identity/governance.

D: **Move resources** works per resource type and is operationally heavy, with sequencing/unsupported-type risks; you’d rebuild access/policy anyway.

---

### Question 18

You’re finishing the **SalesAccess** group from the previous question. Membership must **track HR** automatically and **prevent manual “one-off” adds** that cause audit exceptions. Owners should manage policy, not individual users.

Which option should you choose **for SalesAccess**?

**Options:**

- **A.** A. Assigned membership
- **B.** B. Dynamic membership rule ✅
- **C.** C. Membership requests
- **D.** D. Mail-enabled security group

**Correct answer:** B

**Explanation:**

Choice B is correct. A **dynamic membership rule** enforces **attribute-based** membership (e.g., user.department -eq “Sales”). Entra computes membership and **auto-adds/removes** users as HR changes flow in (from provisioning or manual updates). Because the group is **dynamic**, **manual edits are disallowed**—which directly enforces the governance goal and eliminates shadow adds. The group remains a **security group** for RBAC, but its population is **policy-driven** instead of owner-curated.

Why the other options are incorrect

A: **Assigned** groups require **manual** adds/removes and are prone to drift; they violate the “no manual edits” goal.

C: **Membership requests** apply to M365 groups’ collaboration governance and don’t create an **attribute policy**; they still allow exceptions.

D: **Mail-enabled security** changes mail behavior, not the **membership model**; it doesn’t implement attribute rules.

---

### Question 19

You’re bootstrapping collaboration and access for three cohorts. The pilot team needs collaboration workloads (Teams/Planner/SharePoint). Departmental access must **auto-update** with HR changes. Interns are **cloud-only** and must change password on first sign-in. You’ll standardize creation patterns to avoid rework later.

**Planned objects**

****

Which option should you choose **for PilotTeam**?

**Options:**

- **A.** A. Microsoft 365 group ✅
- **B.** B. Security group (Assigned)
- **C.** C. Mail-enabled security group
- **D.** D. Distribution list

**Correct answer:** A

**Explanation:**

Choice A is correct. **Microsoft 365 groups** are the only group type in Entra/M365 that **natively provisions collaboration workloads**: an Exchange mailbox, SharePoint site, Planner, and can be connected to Teams. That satisfies the PilotTeam row’s need for **Teams/Planner/SharePoint** without bolt-ons. Because the group is first-class in Microsoft 365, owners, membership, and artifacts stay in one lifecycle, reducing drift and admin overhead.

Why the other options are incorrect

B: A **security group** is ideal for **authorization**, but it **doesn’t provision** mailbox/SharePoint/Planner, so it misses the collaboration requirement.

C: A **mail-enabled security group** adds email delivery to a security group, but it still doesn’t create **Teams/Planner/SharePoint** artifacts; it’s primarily for mixed mail + auth scenarios.

D: A **distribution list** is email-only and doesn’t integrate with Teams/Planner/SharePoint; it also lacks modern group governance features.

---

### Question 20

You’re standardizing external access to three blob paths. Security forbids distributing account keys. Some partners need **AAD-backed** delegation; others need **central, instant revoke** across many issued tokens.

**Access needs**

****

Which option should you choose **for media/raw/**?

**Options:**

- **A.** A. User delegation SAS ✅
- **B.** B. Service SAS (adhoc)
- **C.** C. Account SAS
- **D.** D. Public access + IP allowlist

**Correct answer:** A

**Explanation:**

Choice A is correct. A **user delegation SAS** is signed with a **user delegation key obtained via Entra ID** for the **Blob service**. It avoids account keys, ties issuance to **AAD authorization**, and yields **fine-grained, time-scoped** tokens ideal for app-to-blob scenarios like CDN origin pulls. Because it’s derived from AAD, revocation aligns with **AAD token lifetimes** and the delegation key’s lifetime.

Why the other options are incorrect

B: A **service SAS (ad-hoc)** is signed with an **account key** and **can’t be centrally revoked**; you must wait for expiry or rotate keys.

C: An **account SAS** spans services and is signed with **account keys**; too broad and harder to contain if leaked.

D: **Public access** is disallowed and can’t enforce AAD-based delegation.

---

### Question 21

You’re standardizing three workloads. You must pick the **right account kind/features** without changing app code later. Security forbids public anonymous access.

**Workloads**

****

For **DataLakeRaw**, which option should you choose?

**Options:**

- **A.** A. StorageV2 with Hierarchical namespace enabled ✅
- **B.** B. BlobStorage (legacy)
- **C.** C. FileStorage (Premium Files)
- **D.** D. StorageV2 with static website

**Correct answer:** A

**Explanation:**

Choice A is correct. Enabling the **Hierarchical namespace (HNS)** on a **StorageV2** account upgrades Blob to **ADLS Gen2** semantics: directory operations, **POSIX-style ACLs**, atomic renames, and compatible **lifecycle rules**—exactly what analytics pipelines expect. It keeps you on the mainstream GPv2 platform, so future features (encryption scopes, lifecycle, networking) remain available without re-creating the account.

Why the other options are incorrect

B: **BlobStorage (legacy)** lacks new features and HNS; you’d have to re-platform to get ACL directories.

C: **FileStorage** targets SMB/NFS shares, not blob-based hierarchical datasets for analytics.

D: Static website is for **web hosting**; it doesn’t add HNS or POSIX ACLs.

---

### Question 22

You will select redundancy per workload, balancing **in-region resilience** vs **geo continuity**. Traffic is mostly in **Australia East**, but compliance wants **readable replicas** if the region has a major outage.

**Redundancy needs**

****

Which option should you choose **for DataLakeRaw**?

**Options:**

- **A.** A. ZRS
- **B.** B. RA-GZRS ✅
- **C.** C. LRS
- **D.** D. GRS

**Correct answer:** B

**Explanation:**

Choice B is correct. **RA-GZRS** gives **zone-redundant** writes in the primary region (**ZRS**) **plus** **asynchronous geo-replication** with **read access** to the secondary during a regional incident. That matches “zone failure + regional outage” with **readable replicas**. When the primary is healthy, you keep strong in-region durability and availability; during a disaster, you can **read from the secondary** while recovery proceeds.

Why the other options are incorrect

A: **ZRS** handles **zone** failures only; no **geo** read.

C: **LRS** is single-datacenter—insufficient for either zone or regional incidents.

D: **GRS** gives geo durability but **no read** unless Microsoft initiates failover; requirement demands read during outage.

---

### Question 23

You’re standardizing data operations for three paths. Some flows must be **headless** and run on servers without Entra sign-in; others should be **GUI-driven** with user auth. You want resilient, **resume-capable** transfers and to avoid distributing account keys.

Operations table

For **logs/app/**, which option should you choose?

**Options:**

- **A.** A. AzCopy with SAS ✅
- **B.** B. Storage Explorer (Entra ID)
- **C.** C. AzCopy with managed identity
- **D.** D. Portal Upload

**Correct answer:** A

**Explanation:**

Using the Portal “Upload” feature would require user interaction and authentication, which is not suitable for headless operations. This option does not align with the need for standardized data operations that include both headless and GUI-driven flows.

Overall explanation

Choice A is correct. **AzCopy with a SAS** fits a **headless Windows Server** where interactive Entra sign-in isn’t available. You can script resilient, **recursive** transfers (/S), get **automatic retries/resume**, and run on a schedule. SAS scope/expiry keeps exposure minimal and avoids distributing account keys to the host.

Why the other options are incorrect

B: **Storage Explorer** is GUI-centric and requires a user session; it’s not ideal for **scheduled, headless** jobs.

C: **Managed identity** works only where the runtime can present an identity (e.g., VM/VMSS/Container Apps); a generic server without Entra-bound identity can’t use it.

D: **Portal uploads** are manual and fragile for **large, recurring** folder trees.

---

### Question 24

You need **central, policy-like** cost controls for the same three subscriptions. Finance wants budgets with **email + Teams** notifications, and leadership wants **Advisor savings recommendations** reviewed monthly.

**Cost controls**

****

Which option should you choose to meet these needs **without custom code**?

**Options:**

- **A.** A. Cost exports to Storage + Logic Apps
- **B.** B. Budgets with Action Groups (Azure Monitor) ✅
- **C.** C. Azure Advisor only
- **D.** D. Activity Log alerts

**Correct answer:** B

**Explanation:**

Choice B is correct. **Azure Budgets** generate **threshold signals** that you wire to **Action Groups** (email, Teams via webhook/Logic App, ITSM). Budgets can be scoped **per subscription** (Sub-A/C) and **at a management group** to **cover Sub-B and future prod subscriptions** with the same rule. This yields **centralized, reusable, auditable** alerts without code. You can also schedule **Advisor** review separately; budgets handle hard **thresholding and notifications**, while Advisor suggests **savings** (RI/SP, right-size) that you review monthly.

Why the other options are incorrect

A: Exports + Logic Apps are custom and brittle; budgets already emit **first-class signals** with Action Groups.

C: Advisor provides **recommendations**, not budget thresholds or multi-channel alerts.

D: Activity Log alerts don’t express **spend thresholds** and won’t cover cost overruns.

---

### Question 25

You’re standardizing SSPR across mixed identities. Security requires that **hybrid users’** resets update **on-prem AD**. Cloud-only users should keep working with **no changes**. Registration should remain **combined** with MFA to reduce prompts.

Cohorts / state

Which option should you choose?

**Options:**

- **A.** A. Enable password writeback in Azure AD Connect ✅
- **B.** B. Require 2 SSPR methods
- **C.** C. Switch to PTA + Seamless SSO
- **D.** D. Per-user MFA

**Correct answer:** A

**Explanation:**

Choice A is correct. **Password writeback** lets cloud-initiated SSPR **synchronize changes to on-prem AD** for hybrid users. Once enabled (with proper permissions on the sync agent and SSPR allowed for the cohort), **Finance** and **Sales** password resets flow back to AD, while **Marketing** (cloud-only) continues to reset in Entra ID—no change needed. This preserves your sign-in topology, keeps **combined registration** intact, and delivers one consistent SSPR experience with the correct authoritative target per cohort.

Why the other options are incorrect

B: Increasing methods strengthens proof but **doesn’t perform writeback** to on-prem AD.

C: Changing the sign-in method **does not** itself enable password writeback; it alters auth flow, not reset propagation.

D: Per-user MFA settings are unrelated to **where passwords are written**; they don’t provide writeback.

---

### Question 26

You’re selecting the right ACI configuration per workload. Security blocks public exposure unless explicitly required, and you want minimal secrets on hosts.

**Workloads**

****

For **edge-bridge**, which option should you choose?

**Options:**

- **A.** A. ACI container group in a subnet (VNet integration), private IP only, mount Azure Files ✅
- **B.** B. ACI with public IP + DNS label
- **C.** C. Container Apps with external ingress
- **D.** D. Web App for Containers

**Correct answer:** A

**Explanation:**

**Choice A is correct.** Azure Container Instances can be deployed **directly into a VNet subnet**, giving the container group a **private IP** and no public endpoint. That satisfies the **private-only** requirement and lets you mount **Azure Files** for state that outlives container restarts. Because inbound exposure is not allowed, skipping the public DNS label is essential. This pattern keeps data-plane traffic on your private network while still allowing **outbound** internet if the subnet’s routing permits.

Why the other options are incorrect

B: A **public IP + DNS label** exposes an endpoint, violating **private-only** networking.

C: Container Apps is a different service and adds revision/ingress semantics you don’t need; it’s not ACI.

D: App Service targets long-running web workloads and doesn’t provide ACI’s simple **container group** model or per-group VNet-only networking.

---

### Question 27

Three SMB shares have different protection goals. You need to choose the **most direct feature** for each without putting broad secrets on clients.

**Shares &amp; goals**

****

For **projects**, which option should you choose?

**Options:**

- **A.** A. Enable share snapshots
- **B.** B. Enable share soft delete (e.g., 14 days) ✅
- **C.** C. Enable point-in-time restore
- **D.** D. Enable immutability policy

**Correct answer:** B

**Explanation:**

Choice B is correct. **Share soft delete** protects the **entire file share** from accidental deletion by retaining a recoverable copy for a chosen **retention period** (e.g., 14 days). If someone deletes the **projects** share, you can **undelete the share** instantly without reseeding data or re-creating permissions. It’s the only Azure Files feature that specifically addresses **whole-share deletion** with a built-in grace period.

Why the other options are incorrect

A: **Share snapshots** capture file-system state for **in-place previous versions** and point-in-time file restore, but they **don’t bring back a deleted share** once it’s gone.

C: **Point-in-time restore** uses snapshots to restore **files/directories** within an **existing** share to a prior timestamp; it does not recover a **deleted** share.

D: **Immutability** locks content for retention/compliance (WORM); it does not provide an **undelete** path and may **prevent** expected modifications.

---

### Question 28

You’re standardizing monitoring across three resource types. Pick the **enabling step** that unlocks the **stated Insight** for each without changing app code.

**Targets &amp; goals**

****

For **VM api-01** to show **dependency maps** and deep guest performance in VM Insights, what must you do?

**Options:**

- **A.** A. Enable VM insights with Azure Monitor Agent + Dependency agent, targeting a Log Analytics workspace ✅
- **B.** B. Turn on boot diagnostics to a Storage account
- **C.** C. Create metric alerts for CPU and memory only
- **D.** D. Export Activity Logs to a workspace

**Correct answer:** A

**Explanation:**

Choice A is correct. **VM insights** relies on the **Azure Monitor Agent (AMA)** to collect guest performance counters (CPU, memory, disk, networking) and on the **Dependency agent** to build the **service map** (process inventory and TCP dependency graph). Enabling VM insights wires the VM to a **Log Analytics workspace** via a **Data Collection Rule (DCR)** so the platform can continuously stream the right counters and connection data without app changes. For Azure VMs the agents are pushed as VM extensions; for Arc/on-prem servers you enable the same agents on the machine. Once enabled, the **Insights blade** lights up with performance charts, **map of inter-VM connections**, listening ports, and process-level views that help you spot bottlenecks and lateral dependency failures. The AMA path is the **current** and supported pipeline (replacing the legacy Log Analytics agent), and the dependency map specifically requires the Dependency agent—without it, you won’t see the topology even if perf data flows.

Why the other options are incorrect

B: **Boot diagnostics** only captures **console/boot screenshots and serial logs**; it has no guest perf or dependency data and doesn’t populate VM insights.

C: **Metric alerts** on CPU/memory use platform metrics but don’t deploy collectors or enable the **Insights** experience (process inventory, dependency map, detailed guest counters).

D: **Activity Logs** are control-plane events (create/update/delete); they don’t include **guest** performance or network dependency telemetry.

---

### Question 29

You run three web apps with different tiers and data footprints. You need **scheduled backups with retention**, the ability to **restore app content + optional DB**, and **no code changes**. Pick the right pattern for each, knowing backups write to a Storage account container.

**Apps &amp; constraints**

****

For **cms-prod**, which option should you choose to meet the requirement?

**Options:**

- **A.** A. Upgrade to Standard and configure App Service Backup to a Storage container with a schedule ✅
- **B.** B. Export deployment template weekly
- **C.** C. Enable Local Git and keep history
- **D.** D. Turn on diagnostic logs to Blob

**Correct answer:** A

**Explanation:**

**Choice A is correct.** **App Service Backup** is a platform feature that **captures site content and optional databases** to a **Storage account** on a **schedule with retention**—and it requires **Standard, Premium, or Isolated** tiers. Because **cms-prod** runs on **Basic**, backups aren’t available; you must **upgrade to Standard (or higher)**, then configure the backup profile (Storage container SAS, frequency, retention, and DB connections). This yields a **click-to-restore** path without changing application code, and it aligns with the need for **scheduled backups** and **policy-level retention**.

Why the other options are incorrect

B: **Exporting templates** saves infrastructure shape, **not** site data/content or DB payloads, and it isn’t scheduled retention.

C: **Local Git** is a deployment mechanism; it doesn’t back up **runtime content, uploads, or databases**.

D: **Diagnostic logs** capture telemetry, not **restorable site content**; they complement backup but don’t replace it.

---

### Question 30

You’re creating three VMs with distinct **disk/perf** constraints. Choose the **creation action** that is required for each where applicable.

For **api-io**, which option should you choose during creation?

**Options:**

- **A.** A. Premium SSD data disk
- **B.** B. Enable Ultra disk support on the VM ✅
- **C.** C. Encryption at host
- **D.** D. Accelerated networking

**Correct answer:** B

**Explanation:**

Choice B is correct. To attach **Ultra Disks**, the VM must be in a **supported family/zone** and have **Ultra disk support enabled** on the VM resource at creation (or before attaching the disk). Without toggling this capability, Azure won’t allow Ultra disk attachment—even if the region/size nominally supports it. This is a **VM-level flag** that gates Ultra throughput/latency features and queue depths.

Why the other options are incorrect

A: **Premium SSD** isn’t **Ultra**; it won’t meet the performance/latency envelope required.

C: **Encryption at host** is security, not a functional prerequisite for **Ultra**.

D: **Accelerated networking** improves vNIC datapath but is unrelated to **disk** capabilities.

---

### Question 31

For logs/app/ you issued many service SAS tokens to a partner. A batch of tokens was exposed. You must revoke immediately, then extend access for valid consumers without rotating the account keys or re-issuing new tokens everywhere.
Requirements
 Central instant revoke
 Ability to extend/shorten in one place
 No account-key rotation
Which option should you choose?

**Options:**

- **A.** A. Regenerate storage account keys
- **B.** B. Create a stored access policy on the container and issue SAS tied to its signed identifier ✅
- **C.** C. Switch to user delegation SAS for all cases
- **D.** D. Add a VNet service endpoint

**Correct answer:** B

**Explanation:**

Choice B is correct. A stored access policy (on the container) provides a server-side policy object for service SAS. Tokens bound to the policys signed identifier inherit its expiry and permissions. You can revoke instantly by deleting/renaming the policy or extend/shorten by editing the policyall existing bound SAS update behavior immediatelywith no account-key rotation and minimal client churn.
Why the other options are incorrect
A: Key rotation is global and disruptive; it invalidates all SAS signed with that key, not just the leaked set.
C: User delegation SAS is excellent but requires AAD flow and re-issuance; it doesnt retro-bind existing service SAS.
D: Network restrictions dont revoke already issued SAS and often dont match partner network distributions.

---

### Question 32

You manage several VMs in West US. You plan to use Azure Network Watchers Traffic Analytics to monitor flows from NSGs attached to these VMs.
Which two resources should you create?

**Options:**

- **A.** A. a storage account ✅
- **B.** B. a Microsoft Sentinel workspace
- **C.** C. a Log Analytics workspace ✅
- **D.** D. a Data Collection Rule (DCR) in Azure Monitor
- **E.** E. an Azure Monitor workbook

**Correct answer:** A, C

**Explanation:**

Choice A is correct. Traffic Analytics relies on NSG flow logs, which are written to a storage account. Without a storage account configured on the NSG flow logs, Traffic Analytics has no data source.
Choice C is correct. Traffic Analytics processes the NSG flow logs and stores insights in a Log Analytics workspace, enabling KQL queries and dashboards.
Why the others are incorrect
B: Microsoft Sentinel is optional for SIEM use cases and not required to enable Traffic Analytics.
D: DCRs apply to Azure Monitor agent data; NSG flow logs/Traffic Analytics dont require a DCR.
E: Workbooks are for visualization; they are not required to enable Traffic Analytics.

---

### Question 33

You have an Azure VM named VM1 running App1, which does not support multiple active instances. CPU spikes at month-end when App1 runs. Youll use a scheduled Azure Automation runbook to temporarily increase compute capacity at the end of each month.
What task should the runbook perform?

**Options:**

- **A.** A. Add VM1 to a scale set
- **B.** B. Add the Azure Performance Diagnostics agent to VM1
- **C.** C. Modify the VM size property of VM1 ✅
- **D.** D. Increase the vCPU quota for the subscription
- **E.** E. Add a Desired State Configuration (DSC) extension to VM1

**Correct answer:** C

**Explanation:**

Choice C is correct.
Vertically resizing the VM (e.g., to a larger SKU) increases available vCPUs/CPU performance for the peak window. A runbook can schedule this: deallocate VM if required ? update size ? start VM; then optionally resize back after the peak.
Why the others are incorrect
A: Scale sets add instances (horizontal scale), but the app cant run multiple active instances.
B: The Performance Diagnostics agent gathers data; it doesnt increase CPU capacity.
D: Quota raises subscription limits; it doesnt change this VMs performance unless youre blocked by quota, which isnt stated.
E: DSC enforces configuration/state; it doesnt change CPU resources.

---

### Question 34

Youre updating an ARM template for a NIC that must attach to an existing subnet in a virtual network. The virtual network and subnet names are passed as parameters, and deployments may target different resource groups. You want a reliable way to compute the subnet ID without hardcoding paths.
Which option should you choose?

**Options:**

- **A.** A. resourceId ✅
- **B.** B. reference
- **C.** C. concat
- **D.** D. parameters

**Correct answer:** A

**Explanation:**

Choice A is correct. In ARM, resourceId() returns the fully qualified resource ID string for a resource type and name(s). When a property expects an ID (like subnet.id on a NIC), resourceId() is the right tool because it resolves the exact path for the current deployment context and parameter values.
For a same-RG subnet:
“[resourceId(‘Microsoft.Network/virtualNetworks/subnets‘, parameters(‘vnetName‘), parameters(‘subnetName‘))]“
For a cross-RG subnet:
“[resourceId(parameters(‘vnetRg‘), ‘Microsoft.Network/virtualNetworks/subnets‘, parameters(‘vnetName‘), parameters(‘subnetName‘))]“
This keeps the template portable, avoids brittle string concatenation, and ensures the property receives a correctly formatted ID every time.
Why the other options are incorrect
B: reference() fetches runtime properties of an existing resource (e.g., its IPs), not the ID string you need to assign. Its overkill and can introduce unnecessary evaluation ordering.
C: concat() builds strings manually; its error-prone (subscription IDs, providers, casing, slashes) and not context-aware.
D: parameters() simply returns a parameter value; it wont build the canonical resource ID path.

---

### Question 35

Youre deploying a Container App from a private Azure Container Registry. Security forbids storing admin passwords or ACR tokens in secrets. The app should pull images using a platform identity with least privilege.
To pull from private ACR without stored passwords, configure the app to use __________ and grant AcrPull.

**Options:**

- **A.** A. Admin user
- **B.** B. Managed identity ✅
- **C.** C. Docker Hub token
- **D.** D. PAT

**Correct answer:** B

**Explanation:**

Choice B is correct. A managed identity lets the Container App authenticate to ACR without embedded credentials. Grant the identity the AcrPull role on the registry and the platform will exchange identity for a scoped pull token at runtime. This delivers credential-free, least-privilege image pulls, avoids secret sprawl, and eases rotation because no passwords are stored in your app configuration.
Why the other options are incorrect
A: Admin user exposes a static, all-powerful credentialdisallowed by policy and risky to rotate.
C: A Docker Hub token is unrelated to Azure Container Registry and wont authorize ACR pulls.
D: A PAT (e.g., DevOps) is still a stored secret and not the recommended identity-based flow.

---

### Question 36

You manage an Azure subscription containing a Recovery Services vault named Vault1. To strengthen protection against accidental or malicious actions (for example, disabling soft delete or deleting backup items), you need to enable Multi-User Authorization (MAU) for Vault1.
Which resource should you create first?

**Options:**

- **A.** A. an administrative unit
- **B.** B. a managed identity
- **C.** C. a resource guard ✅
- **D.** D. a custom Azure role

**Correct answer:** C

**Explanation:**

Choice C is correct.
Before you can enable Multi-User Authorization (MAU) on a Recovery Services vault, you must first create a Resource Guard. The Resource Guard is a separate Azure resource that provides an additional layer of protection for privileged operations such as disabling soft delete, modifying backup policies, or stopping protection. Once a Resource Guard is created, it is linked to the vault and configured with an authorization listtypically a subset of users or groups who can approve critical actions. This ensures that high-impact operations require explicit consent from multiple parties, thereby implementing the principle of separation of duties and reducing insider threat risks.
Why the others are incorrect (expanded)
A: Administrative unit  Used in Microsoft Entra ID to delegate administrative rights over user or group subsets; it has no relationship to Recovery Services vault operations or MAU configuration.
B: Managed identity  Provides secure identity for apps or services to authenticate to Azure resources without credentials. It does not participate in MAU or resource protection workflows.
D: Custom Azure role  While roles and RBAC control access to Azure resources, MAU relies on a Resource Guard, not on role definitions, to enforce additional authorization. You may still use roles to control who can approve MAU operations, but that comes after the Resource Guard is deployed.

---

### Question 37

Tailwind Traders is starting a pilot with Fabrikam and must allow external collaboration only with users from fabrikam.com. Security wants a tenant-wide control so that invitations to any other external domains are blocked in Microsoft 365 workloads. Admin overhead should be minimal and centrally enforced.
Which option should you choose?

**Options:**

- **A.** A. Allowlist domain in External collaboration ✅
- **B.** B. Disable guest access in Teams
- **C.** C. Block external sharing in SharePoint admin center
- **D.** D. Conditional Access: block non-corporate email domains

**Correct answer:** A

**Explanation:**

Choice A is correct. External collaboration ? Collaboration restrictions lets you set Allow invitations to only the specified domains and add fabrikam.com. This is a directory-level control in Entra ID that governs who can be invited across connected services (Teams, SharePoint/OneDrive, etc.), giving a single, tenant-wide allowlist. It eliminates drift between service-specific settings and ensures any new workloads respect the same invite boundary without extra configuration.
Why the other options are incorrect
B: Disabling guest access in Teams affects Teams only and blocks all guests, not just non-Fabrikam domains. It doesnt enforce a tenant-wide domain policy for invitations.
C: SharePoint admin sharing limits affect SharePoint/OneDrive scope, not tenant-wide invitations. Other services (e.g., Teams, Azure resources) may still invite guests.
D: Conditional Access governs access at sign-in, not who can be invited. You could still create guests from disallowed domains; theyd simply be blocked at sign-inmisaligned with the requirement to prevent invitations.

---

### Question 38

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
AppX is rehosted as VMs in a single VNet (Web, Processing, Data). Azure Storage for design packages is reachable only via a Private Endpoint. After the cutover, the Web tier cannot access Blob by FQDN.
Which TWO configurations should you implement?

**Options:**

- **A.** A. Create a Private Endpoint for the storage account ✅
- **B.** B. Enable service endpoints to Storage on the Web subnet
- **C.** C. Create a Private DNS zone privatelink.blob.core.windows.net and link it to the VNet ✅
- **D.** D. Add a UDR to the Web subnet that points Blob FQDNs to the Private Endpoint IP

**Correct answer:** A, C

**Explanation:**

Choice A is correct. The workload must expose Storage privately inside the VNet; a Private Endpoint maps the storage account to a private IP on the Web/Processing/Data side, keeping data off the public internet.
Choice C is correct. Private Endpoints require name resolution of the public FQDN to the private IP. Linking the Private DNS zone privatelink.blob.core.windows.net to the VNet lets the VMs resolve the storage account name to its Private Endpoint address without host-file hacks or custom DNS appliances.
Why the others are incorrect
B: Service endpoints dont apply to AppX ? Storage when youve chosen Private Endpoints; they keep traffic on Microsofts backbone but still use public FQDNs and arent needed here.
D: A UDR does not solve DNS. You must first resolve the FQDN to the private IP; routing alone cannot redirect name resolution.

---

### Question 39

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
Design packages move to Azure Blob. You must (a) provide point-in-time restore for accidental delete/overwrite and (b) grant partners temporary, least-privilege upload/download without creating partner accounts.
Which TWO configurations best meet the requirements with minimal overhead?

**Options:**

- **A.** A. Configure blob backup in a Backup vault ✅
- **B.** B. Use a Recovery Services vault for blob backup
- **C.** C. Issue container-level SAS governed by a stored access policy ✅
- **D.** D. Enable versioning + soft delete only

**Correct answer:** A, C

**Explanation:**

Choice C is correct. A container-level SAS with a stored access policy gives time-bound, scoped permissions (read/write/list) and supports clean revocation by removing or rotating the policyideal for partner bursts without creating identities.
Choice A is correct. Operational backup for Azure Blobs is delivered via a Backup vault, enabling point-in-time restore within the account without custom pipelines. It complements lifecycle tiering and versioning for robust recovery.
Why the others are incorrect
B: A Recovery Services vault doesnt protect Blobs; its for VMs, Azure Files, SQL in VMs, etc.
D: Versioning/soft delete help, but they dont replace PITR coverage and governance you get from Azure Backup.

---

### Question 40

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
AppX VMs must be protected with Azure-native backups. A legacy tool requires unmanaged standard storage for all VM disks. You also need file-level restores when needed.
What should you configure?

**Options:**

- **A.** A. Azure Disk Backup (Backup vault)
- **B.** B. Azure VM Backup to a Recovery Services vault ✅
- **C.** C. Azure Site Recovery to a paired region
- **D.** D. Nightly AzCopy export of VHDs to on-prem

**Correct answer:** B

**Explanation:**

Choice B is correct. Azure VM Backup (to a Recovery Services vault) supports unmanaged disks, provides application-consistent snapshots (VSS), policy-based retention, file-level recovery, and full-VM/disk restoresall with minimal administration. This directly satisfies the unmanaged-disk constraint and restore requirements.
Why the others are incorrect
A: Disk Backup targets managed disks; it doesnt support unmanaged disks.
C: ASR is replication/DR (RPO/RTO), not a backup/restore catalog with file-level recovery.
D: DIY exports are operationally brittle, costly to move/retain, and lack policy/reporting and easy restores.

---

### Question 41

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
Processing tier must call third-party APIs from a fixed public IP. Storage access must remain private via Private Endpoints. Data subnet must not use public egress.
What should you configure?

**Options:**

- **A.** A. Public IPs on all VMs, Express routes to host all networking with no firewall, use RBAC instead for network traffic
- **B.** B. Service endpoints to Storage and default Internet route
- **C.** C. NAT Gateway on the VNet
- **D.** D. NAT Gateway attached to the Processing subnet; Private Endpoints for Storage; no NAT on Data subnet ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Attaching a NAT Gateway to the Processing subnet gives those VMs a stable SNAT public IP for outbound calls to third-party APIs. Using Private Endpoints for Storage keeps data traffic private (no SNAT to public). By not associating NAT with the Data subnet, you prevent unintended public egress from that tier, aligning with least-privilege egress and segmentation goals.
Why the others are incorrect
A: Public IPs on VMs increase exposure, cost, and management; they dont scope egress per subnet.
B: Service endpoints dont provide a fixed public IP and still use public FQDNs; not compatible with the private-only Storage decision.
C: A VNet-level NAT attachment doesnt exist; NAT is associated with subnets, and you need per-subnet control.

---

### Question 42

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
You must (1) deny public network access on all Storage accounts and (2) ensure required tags (Owner, CostCenter, Environment) are present on every resource with minimal admin effort. Dev RG is excluded.
Which TWO policy assignments best meet the requirements?

**Options:**

- **A.** A. Assign Storage accounts should disable public network access with Deny at subscription; exclude Dev RG ✅
- **B.** B. Assign Require a tag and its value for each required tag with Deny at subscription; exclude Dev RG ✅
- **C.** C. Assign Inherit a tag from the resource group with Modify for all tags; no remediation task
- **D.** D. Use RBAC to block creation of storage accounts without tags
- **E.** E. Create activity log alerts for storage public access

**Correct answer:** A, B

**Explanation:**

A enforces the platform control: the built-in policy denies creation/update of Storage accounts with Public network access enabled, satisfying the disable public access guardrail while honoring the RG exclusion.
B guarantees tags exist by denying non-compliant deployments (fast feedback, low ops). Where you prefer auto-fix, you can pair Modify with a remediation taskbut the question prioritizes minimal admin effort and clear enforcement, which Deny provides out of the box.
Why the others are incorrect
C: Modify can auto-append tags, but without a remediation task existing resources wont be updated; also inherit RG tags may not match required tag values policy-wide.
D: RBAC doesnt validate resource properties like tags or public access; Policy is the right control plane.
E: Alerts dont prevent misconfiguration; they only notify after the fact.

---

### Question 43

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
The Web tier (IaaS VMs) must be published HTTPS-only with OWASP WAF protections and minimal cert management. Certificates are stored in Key Vault and should auto-rotate on the gateway.
What should you deploy/configure?

**Options:**

- **A.** A. App Gateway v2 (WAF), HTTPS listener with Key Vault-referenced cert, HTTP?HTTPS redirect ✅
- **B.** B. Public Load Balancer + VM certs; block HTTP in NSGs
- **C.** C. Traffic Manager + public IPs on web VMs
- **D.** D. App Gateway v1 with uploaded PFX; no redirect

**Correct answer:** A

**Explanation:**

A is correct. Application Gateway v2 (WAF) provides Layer-7 HTTPS, managed WAF policies, and automatic cert renewal when you reference the cert from Key Vault. Configure an HTTP listener that issues a 301 redirect to HTTPS, and an HTTPS listener that terminates TLS using the KV certificatemeeting HTTPS-only, WAF, and low-effort cert rotation in one place.
Why the others are incorrect
B: A Public Load Balancer is L4 (no WAF, no TLS policy). Certs on each VM increase ops overhead.
C: Traffic Manager is DNS-based; it doesnt do TLS termination or WAF.
D: v1 lacks autoscale/Key Vault integration for certs; no redirect means users can still hit HTTP.

---

### Question 44

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
Security requires multi-user authorization for destructive actions such as Key Vault purge and disabling backup protections, while keeping workloads functional day-to-day.
What should you create and link?

**Options:**

- **A.** A. Resource Guard and link it to the vaults critical operations ✅
- **B.** B. Managed identity on the vault
- **C.** C. Custom RBAC roles for purge
- **D.** D. Administrative unit in Entra ID

**Correct answer:** A

**Explanation:**

A is correct. Resource Guard enforces Multi-User Authorization (MAU) by requiring an independent approver before critical operations (e.g., Key Vault purge, disable soft delete/backup) can proceed. You create a Resource Guard, configure protected operations, and link it to the Key Vault and Backup/Recovery Services vault(s). Day-to-day reads/writes continue normally; only sensitive actions require approvalachieving separation of duties without breaking workloads.
Why the others are incorrect
B: Managed identity is for workload authentication, not approval workflows for destructive ops.
C: Custom roles can restrict permissions but dont implement a two-person rule across services.
D: Administrative units scope directory admin, not cross-service MAU for vault operations.

---

### Question 45

You have an Azure subscription.
You need to deploy a virtual machine that runs Windows Server 2025 Datacenter: Azure Edition.
Which security type can you select when deploying virtual machine?

**Options:**

- **A.** A. Standard only
- **B.** B. Standard or trusted launch only ✅
- **C.** C. Standard, trusted launch or confidential
- **D.** D. Trusted launch or confidential only

**Correct answer:** B

**Explanation:**

Microsoft documents Windows Server 2025 as a supported Generation 2 marketplace image, and Microsofts Trusted Launch guidance says Trusted Launch is supported for Generation 2 Windows VMs. That means a Windows Server 2025 Datacenter: Azure Edition VM can be deployed as a regular Standard VM or as a Trusted Launch VM.
Confidential is different. Microsofts confidential VM guidance says you select Confidential virtual machines only when you choose a supported confidential image and a supported confidential VM size, and the portal specifically tells you to filter images by Security Type = Confidential to find those images. Since the question names the regular Windows Server 2025 Datacenter: Azure Edition image rather than a confidential image, the expected exam answer is Standard or trusted launch only. That is the safest interpretation based on Microsofts current image and security-type guidance.
Why the other options are incorrect:
 A. Standard only  This is too restrictive. Trusted Launch is supported for supported Generation 2 Windows VMs, and Windows Server 2025 is listed as a supported Generation 2 marketplace image. So you are not limited to Standard.
 C. Standard, trusted launch or confidential  This would be correct only if the image were a supported confidential image. Microsofts confidential VM deployment guidance makes that image requirement explicit, so you should not assume every Windows Server 2025 Azure Edition image can also be deployed as Confidential.
 D. Trusted launch or confidential only  This excludes Standard, which is still a valid security type when deploying supported Windows marketplace images. Trusted Launch is recommended for Gen2 Windows images, but Standard remains selectable.

---

### Question 46

Contoso runs an Azure App Service at contoso.azurewebsites.net. You must configure it to serve www.contoso.com. You want to follow the correct order of operations to avoid downtime and ensure ownership is verified.
What should you do first?

**Options:**

- **A.** A. Create a TXT record named asuid that contains the domain verification ID. ✅
- **B.** B. Create a TXT record named www.contoso.com with value contoso.azurewebsites.net.
- **C.** C. Create a CNAME record named asuid that contains the domain verification ID.
- **D.** D. Create A records for www.contoso.com and asuid.contoso.com.
- **E.** E. Bind the www.contoso.com certificate in the web app.
- **F.** F. Enable HTTPS Only on the web app.

**Correct answer:** A

**Explanation:**

Choice A is correct.
You must verify domain ownership before mapping. Azure App Service issues a domain verification ID; you publish it as a TXT record named asuid in the domains DNS. Once verified, you can add the custom domain and create the CNAME or A/ALIAS records as appropriate.
Why the others are incorrect
B: A TXT record for the host pointing to the apps default domain does not verify ownership.
C: Verification requires a TXT record, not a CNAME.
D: A records dont verify ownership and are not the first step.
E: TLS binding comes after the host name is successfully added.
F: HTTPS-only is a hardening step, unrelated to initial domain verification.

---

### Question 47

Contoso is opening its tenant to a single strategic partner, fabrikam.com. Security wants to block all other external domains, keep Teams/SharePoint collaboration working for Fabrikam, and avoid per-service exceptions. They also want a control that is tenant-wide, auditable, and easy to reverse if the pilot ends.
Requirements
 Only allow invitations to fabrikam.com
 Block invitations to any other domain
 Apply tenant-wide across Microsoft 365 workloads
Which option should you choose?

**Options:**

- **A.** A. Disable guest access in Teams
- **B.** B. Conditional Access: Require MFA for guests
- **C.** C. Turn off external sharing in SharePoint
- **D.** D. External collaboration restrictions: Allow invitations to only specified domains and add fabrikam.com ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. External collaboration restrictions (tenant-level) control who can be invited across services. Setting Allow invitations to only specified domains with fabrikam.com creates a single allowlist that all connected workloads respect (Teams, SharePoint/OneDrive, etc.). This prevents creation of non-Fabrikam guests rather than merely blocking them at sign-in, delivers a clear audit trail, and can be rolled back cleanly by switching to allow all or using a denylist.
Why the other options are incorrect
A: Turning off Teams guest access affects only Teams and blocks even Fabrikam guests; its not tenant-wide and breaks the requirement.
B: Conditional Access enforces sign-in conditions (e.g., MFA) but doesnt govern who can be invited; non-Fabrikam guests could still be created.
C: SharePoint external sharing limits only SharePoint/OneDrive and wont prevent guest invitations in other services.

---

### Question 48

Compliance requires in-guest encryption for both Windows and Linux VMs using keys under your control, with the ability to revoke/rotate in Key Vault. You must encrypt OS and data disks without changing application code or storage architecture.
Which option should you choose?

**Options:**

- **A.** A. Encryption at host
- **B.** B. Microsoft-managed keys (SSE)
- **C.** C. Azure Disk Encryption (ADE) via extension with Key Vault integration ✅
- **D.** D. Disk Encryption Set (SSE with CMK)

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure Disk Encryption (ADE) enforces BitLocker (Windows) or dm-crypt (Linux) inside the guest, covering OS and data volumes. The ADE extension brokers secrets from Key Vault, so you retain customer key control and can revoke/rotate centrally without touching app code. Because ADE operates at the guest layer, it achieves in-guest compliance requirements that service-side encryption (SSE/MMK/CMK) alone does not satisfy.
Why the other options are incorrect
A: Encryption at host protects data on the host but is not in-guest (no BitLocker/dm-crypt) and doesnt tie to Key Vault per-guest.
B: Microsoft-managed SSE gives service-side encryption but no customer key control and no in-guest protection.
D: A Disk Encryption Set provides SSE with CMK (service-side), still not in-guest encryption.

---

### Question 49

Multiple App Service apps, plans, and Application Insights resources live in apps-prod-rg. The DevOps team needs to deploy/manage only those resources, and any new resources in that RG should be covered automatically. They must not gain rights in other RGs or subscriptions.
Requirements
 Scope rights to apps-prod-rg only
 Inherit to existing and future resources in that RG
 Avoid subscription-wide impact
Which option should you choose?

**Options:**

- **A.** A. Assign role at the management group
- **B.** B. Assign role at the subscription
- **C.** C. Assign role at the resource group ✅
- **D.** D. Assign role at each individual resource

**Correct answer:** C

**Explanation:**

Choice C is correct. Assigning at the resource group gives automatic inheritance to all current and future resources in that RG while excluding other RGs/subscriptions. This is the cleanest way to keep DevOps permissions scoped and future-proof: one assignment, inherited downward, no bleed-over to adjacent workloads.
Why the other options are incorrect
A: Management group scopes cascade to all subscriptions/RGs under itfar too broad.
B: Subscription scope grants access to every RG in that subscription.
D: Per-resource assignments meet least privilege but cause operational sprawl and miss future resources unless constantly maintained.

---

### Question 50

Finance mandates that every resource inherits environment and costCenter from its resource group. This must apply at scale across multiple subscriptions, auto-apply on new deployments, and retro-fix existing resources  without touching CI/CD templates. Some managed services require documented exceptions.
Requirements
 Auto-apply tags from RG to resources
 Backfill existing resources
 Central scope; allow exemptions where justified
Which option should you choose?

**Options:**

- **A.** A. Set tags on RGs and expect inheritance
- **B.** B. Add tags in ARM/Bicep templates
- **C.** C. Policy (Modify) at management-group scope + remediation + exemptions ✅
- **D.** D. Advisor recommendations

**Correct answer:** C

**Explanation:**

Choice C is correct. Tags dont inherit natively, so you enforce inheritance with Azure Policy (Modify) that copies RG tags to resources. Assign at the management group to cover all child subscriptions/RGs, run a remediation task to backfill existing resources, and use policy exemptions for managed services that cant accept the change. This achieves auto-apply, retro-fix, and central governance without changing deployment pipelines.
Why the other options are incorrect
A: RG tags do not cascade to child resources on their own.
B: Template tagging works for new deployments only and requires pipeline edits; it wont backfill.
D: Advisor surfaces guidance but doesnt enforce or apply tags.

---

### Question 51

An RG created years ago in East US now hosts resources in Australia East and Australia Southeast. During a regional incident in East US, control-plane operations on that RG stalled, though workloads in AU kept running. You want the RGs control-plane location to be in Australia East going forward, without redeploying apps.
Which option should you choose?

**Options:**

- **A.** A. Rename the resource group
- **B.** B. Change the RGs Location property
- **C.** C. Export templates and redeploy everything
- **D.** D. Create a new RG in Australia East and move supported resources into it ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. An RGs location is immutable. To change the management-plane home, create a new RG in Australia East and move supported resources into it. The resource locations can remain in Australia East/SE; youre relocating only the RG container. Validate move support per resource type and sequence moves to preserve dependencies (e.g., NICs with VMs, public IPs with LBs).
Why the other options are incorrect
A: RGs cant be renamed.
B: The RG Location cannot be edited after creation.
C: Full redeploy is unnecessary and high-risk when moves are supported.

---

### Question 52

You have an Azure subscription named Sub1.
You plan to deploy a virtual machine scale set named VMSS1 in East US region. VMSS1 will have 8 instances.
What is the maximum number of availability zones that VMSS1 can use?

**Options:**

- **A.** A. 1
- **B.** B. 2
- **C.** C. 3 ✅
- **D.** D. 4

**Correct answer:** C

**Explanation:**

East US is an Azure region that supports availability zones. Microsofts VM scale set documentation says a scale set can be created in one or more available zones, and the examples for VMSS zonal deployment use zones 1, 2, and 3. Microsofts reliability guidance for Virtual Machine Scale Sets also describes zone-spanning VMSS deployments across three zones.
The fact that VMSS1 has 8 instances does not increase the number of zones available. Those 8 instances can be distributed across the zones you select, but the maximum number of availability zones available to the scale set in East US is still 3.
Why the other options are incorrect:
 A. 1  A VM scale set can be deployed in a single zone, but that is not the maximum. Microsoft documents that you can choose one or more zones, including zones 1, 2, and 3.
 B. 2  Two zones are possible in some designs, but the documentation shows VM scale sets can span three availability zones in supported regions such as East US.
 D. 4  Azure availability zone selection for VM scale sets is documented with zones 1, 2, and 3. Microsoft does not document a fourth availability zone for East US VMSS deployment.

---

### Question 53

You need asymmetric replication of block blobs from stsource (Australia East) to stdest (Australia Southeast) for the containers datalake/raw ? archive/raw. Security insists on least privilege and no account keys in pipelines. You want existing and new versions to flow, and you must preserve delete markers for retention analysis.
Requirements
 Support block blobs only
 Versioning on source and destination
 Change feed on source
 Configure with identity (no keys)
 Replicate new versions and propagate deletes
Which option should you choose?

**Options:**

- **A.** A. Enable soft delete and snapshots; use copy jobs
- **B.** B. Turn on versioning only; create lifecycle move rules
- **C.** C. Enable versioning on both, change feed on source; create an object replication policy (pair containers) and use managed identity ✅
- **D.** D. Enable NFS and rsync the containers

**Correct answer:** C

**Explanation:**

Choice C is correct. Object replication for block blobs requires blob versioning on both accounts and change feed on the source. You then create an object replication policy that pairs source and destination containers and specifies rules for versions and delete marker behavior. By wiring the configuration with a managed identity, you avoid embedding account keys while granting only the permissions needed to evaluate the policy and move data. The result is low-touch, policy-driven replication that handles new versions and deletions predictably.
Why the other options are incorrect
A: Soft delete/snapshots with ad-hoc copy lacks policy and wont track delete markers or version lineage automatically.
B: Versioning alone doesnt replicate; lifecycle moves dont copy across accounts/regions.
D: NFS/rsync bypasses blob semantics, has no notion of versions/delete markers, and breaks the no keys in pipelines rule.

---

### Question 54

You want new prod subscriptions to inherit baseline Azure Policy (tagging, SKU restrictions) and role assignments automatically the moment theyre added, without re-assigning at each subscription. Only prod subscriptions should get these controls.
To ensure automatic inheritance for all current and future prod subscriptions, create a __________ and assign policy/roles at that level.

**Options:**

- **A.** A. Resource group
- **B.** B. Subscription
- **C.** C. Management group ✅
- **D.** D. Tenant root group

**Correct answer:** C

**Explanation:**

Choice C is correct. A management group is the hierarchical scope above subscriptions where policy and RBAC assignments inherit to all child subscriptions. By creating a Prod management group and placing prod subscriptions under it, every current and future prod subscription automatically receives the same policies/roles. This matches least effort + maximum consistency while keeping non-prod in separate MGs with different baselines.
Why the other options are incorrect
A: A resource group is below a subscription and cant apply controls across subscriptions.
B: Assigning at a subscription doesnt catch new prod subscriptions automatically.
D: The tenant root group would apply to all subscriptions (prod and non-prod), not just prod.

---

### Question 55

You have a Microsoft Entra tenant that contains the following users:
User1 has a Department set to Sales and a Country set to USA
User2 has a Department set to Marketing and a Country set to USA
User3 has a Department set to Sales and a Country set to DE
User4 has a Department set to Marketing and a Country set to DE
You create a group named Group1 that has the following dynamic membership rule.
user.country -eq “USA“ -and user.department -eq “Marketing“ -or user.department -eq “Sales“
Which users are members of Group1?

**Options:**

- **A.** A. User1 and User2 only
- **B.** B. User1 and User3 only
- **C.** C. User2 and User3 only
- **D.** D. User1, User2, and User3 only ✅
- **E.** E. User1, User2, User3 and User4

**Correct answer:** D

**Explanation:**

Microsoft documents that in dynamic membership rules, -and has higher precedence than -or. That means this rule is evaluated as:
(user.country -eq “USA“ -and user.department -eq “Marketing“) -or (user.department -eq “Sales“)
Evaluating each user against that logic:
User1 matches because department = Sales.
User2 matches because country = USA and department = Marketing.
User3 matches because department = Sales, even though the country is DE.
User4 does not match because the first clause fails (country is not USA) and the second clause fails (department is not Sales).
So the members of Group1 are User1, User2, and User3. If you wanted the country requirement to apply to both Marketing and Sales, Microsoft notes that you should use parentheses, for example: user.country -eq “US“ -and (user.department -eq “Marketing“ -or user.department -eq “Sales“).
Why the other options are incorrect:
 A. User1 and User2 only  This excludes User3, but User3 still matches because the rule includes a separate -or user.department -eq “Sales“ clause. Since -and is evaluated before -or, the Sales condition stands on its own and is not restricted to USA.
 B. User1 and User3 only  This excludes User2, but User2 satisfies the first part of the rule because User2 is in USA and in Marketing. That makes User2 a valid member even without the Sales clause.
 C. User2 and User3 only  This excludes User1, but User1 matches because any user with department = Sales is included by the final -or condition. The country value does not block User1.
 E. User1, User2, User3 and User4  User4 does not match. User4 is Marketing, but not in USA, so the first clause fails, and User4 is not in Sales, so the second clause fails too.

---

### Question 56

An internal Standard Load Balancer fronts VMSS instances on 443. Health probe: TCP 443. The backend NICs are in AppSubnet with an NSG that denies inbound 443 from all. The load balancer shows all backends Unhealthy, and connections to the private frontend timeout. No application errors are logged on the VMs.
What is the most direct fix?

**Options:**

- **A.** A. Open inbound 443 from Internet in the NSG
- **B.** B. Change probe to HTTP /healthz
- **C.** C. Disable TCP resets on LB rule
- **D.** D. Allow AzureLoadBalancer to 443 in the NSG ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Standard Load Balancer health probes originate from the platform and are identified by the AzureLoadBalancer service tag. Your NSG blocks 443 from all, so probes cant reach backend instances; the LB marks them Unhealthy, and no traffic is forwarded. Add a higher-priority NSG rule on the subnet or NIC to allow inbound from AzureLoadBalancer to port 443 (plus your apps real health port if different). Once probes pass, backends become Healthy and the LB resumes distributing flows. No app change is needed.
Why the other options are incorrect
A: Opening to Internet is unnecessary and weakens security; the probe source isnt Internet.
B: Changing to HTTP doesnt help if the NSG still blocks the probe source.
C: TCP reset behavior doesnt affect probe reachability; probes are still blocked by the NSG.

---

### Question 57

You want a single logical registry that serves low-latency pulls in Europe and Australia using regional endpoints, keeps replicas close to the builders/runtimes, and avoids creating/seeding multiple registries. Security will harden access separately (private endpoints/identities).
Which option should you choose?

**Options:**

- **A.** A. Enable admin user and use PATs
- **B.** B. Configure webhooks
- **C.** C. Private endpoint only
- **D.** D. Geo-replication ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Geo-replication keeps one ACR name while provisioning regional replicas that serve pushes/pulls locally in each geography. Images replicate within the same registry namespace, so builders and consumers hit nearest endpoints, reducing latency and egress. You avoid multi-registry sprawl, version drift, and duplicated pipelines while maintaining central RBAC/policies. Harden with private endpoints and managed identities separately as needed.
Why the other options are incorrect
A: The admin user is a broad static credential and doesnt address regional performance or replication.
B: Webhooks notify clients of events; they dont replicate images or add regional endpoints.
C: A private endpoint secures network access but doesnt create regional replicas or reduce cross-region pulls on its own.

---

### Question 58

Compliance mandates customer-managed keys (CMK) for a StorageV2 account with automatic pickup of new key versions after rotation in Key Vault/Managed HSM. Ops wants no app changes, and security wants least-privilege permissions on the key. Double encryption isnt required.
Which option should you choose?

**Options:**

- **A.** A. Encryption at host
- **B.** B. Microsoft-managed keys
- **C.** C. Client-side encryption in SDK
- **D.** D. Configure CMK using a managed identity with get/wrapKey/unwrapKey and omit the key version ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Enabling CMK on the storage account and granting its managed identity only get/wrapKey/unwrapKey on the Key Vault/HSM key satisfies least privilege. If you omit the key version in the configuration, the account will automatically adopt the newest version after rotationmeeting auto-update with no code changes. This keeps encryption service-side (no client modifications) and centralizes key lifecycle in Key Vault/HSM.
Why the other options are incorrect
A: Encryption at host adds a host-level layer but doesnt give customer key control.
B: Microsoft-managed keys dont satisfy CMK compliance.
C: Client-side encryption requires application changes and key handling in the clientopposite of the requirement.

---

### Question 59

You need continuous, end-to-end tests from a VM in SpokeA to a Storage account Private Endpoint in SpokeB (TCP 443). Results must track packet loss/latency/reachability and alert on failures. One-off checks arent enough; you want ongoing monitoring that understands private DNS resolution.
Requirements
 Ongoing tests (not one-time)
 Private FQDN resolves to private IP
 Metrics for reachability/latency; alertable
Which feature should you use?

**Options:**

- **A.** A. IP Flow Verify
- **B.** B. Connection Monitor ✅
- **C.** C. Next Hop
- **D.** D. NSG flow logs only

**Correct answer:** B

**Explanation:**

Choice B is correct. Connection Monitor runs continuous, scheduled tests from defined sources (e.g., a VM in SpokeA with the agent) to destinations (FQDN or IPyour Storage Private Endpoint on 443). It measures reachability, round-trip latency, and packet loss, and it resolves FQDNs using the source VMs DNSso if your private DNS is set up correctly, the test will follow the private name to the private IP. Results are stored for trend analysis, and you can wire them into Azure Monitor alerts (metrics or log-based) to page when reachability drops or latency bursts. Its built for ongoing validation across spokes and on-prem, catching regressions from NSG/UDR/DNS drift that a one-time check would miss.
Why the other options are incorrect
A: IP Flow Verify is a point-in-time NSG evaluation (allow/deny) for a single tuple; it doesnt continuously test end-to-end reachability/latency or validate DNS.
C: Next Hop tells you which route a packet would take; it doesnt confirm the endpoint is reachable, nor does it measure performance or consider FQDN/DNS resolution.
D: NSG flow logs are passive records written after the fact; theyre useful for forensics but dont provide active, scheduled testing or alerting on failures.

---

### Question 60

You plan access-based lifecycle rules: move blobs to Cool after 30 days since last access, and to Archive after 180 days since last access. No scriptspolicy only.
To enable access-based lifecycle actions, first turn on __________ at the account.

**Options:**

- **A.** A. Immutability policy
- **B.** B. Versioning
- **C.** C. Change feed
- **D.** D. Last access time tracking ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Last access time tracking records when a blob was last read so lifecycle rules can evaluate days since last access for automatic tiering to Cool/Archive. Without it, rules can only use last modified time.
Why the other options are incorrect
A: Immutability locks retention and can block deletes/tiering; it doesnt provide access timestamps.
B: Versioning enables version restore and copy behaviors, not access-based tiering.
C: Change feed tracks events but isnt the signal lifecycle uses for since last access.

---
