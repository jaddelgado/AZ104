# Practice Set 15

Source: [https://skillcertpro.com/az-104-exam-questions/15/](https://skillcertpro.com/az-104-exam-questions/15/)
Total questions: 60

---

### Question 1

Contosos data team wants one SMB share for media assets. You have to create a single share sized 80 TiB on Standard storage; no Premium required.
Current state
What should you do?

**Options:**

- **A.** A. Enable Large file shares on the GPv2 account, then create an SMB share and set the quota to 80 TiB ✅
- **B.** B. Create four 20 TiB shares and stitch with DFS-N
- **C.** C. Migrate to Premium FileStorage; create an 80 TiB SMB share
- **D.** D. Use Blob containers instead; they scale beyond 80 TiB

**Correct answer:** A

**Explanation:**

Standard GPv2 accounts can host up to 100 TiB per share when Large file shares is enabled. Turn on Large file shares at the storage account level, then create the SMB share and set its quota to 80 TiB. This meets the single share on Standard requirement without moving to Premium.
Why the other options are incorrect:
B. Multiple shares + DFS-N: Increases operational complexity and does not satisfy the single share requirement.
C. Premium FileStorage: Works, but the scenario explicitly says no Premium required; Standard with Large file shares already meets the target size.
D. Blob containers: Blob isnt a file share (different API/protocol); Windows SMB workloads expect Azure Files, not Blob.

---

### Question 2

Contosos Finance team requires proactive alerts when the actual monthly cost for the Production subscription hits 80% of the budget. You must avoid custom KQL and keep it in native Cost Management.
Current status
What should you configure?

**Options:**

- **A.** A. Azure Monitor metric alert on Cost* metrics
- **B.** B. Scheduled query alert on UsageDetails in Log Analytics
- **C.** C. Cost Management budget with an 80% actual threshold and email recipients ✅
- **D.** D. Azure Advisor cost recommendation alert

**Correct answer:** C

**Explanation:**

Cost Management Budgets provide native alerts on actual and forecasted spend at subscription or resource group scope. Configure a monthly budget of USD 100,000 with a notification threshold of 80% (actual) and add recipients (emails, groups, and/or an action group). This raises alerts when actual costs cross the thresholdno KQL, no custom ingestion.
why the others are incorrect:
A. Cost metrics arent first-class Azure Monitor metrics for direct budget thresholds; youd still need a budget to define the 80% logic.
B. Requires exporting usage to a workspace and writing KQLexplicitly not desired.
D. Advisor gives recommendations (RI/Savings Plans, right-size), not budget threshold alerts.

---

### Question 3

Fabrikam runs dozens of subscriptions. Leadership asks for a single place to review cost-saving recommendations (right-size underutilized compute, buy Savings Plans/Reserved Instances, remove idle public IPs) and then drill into details by subscription.
Where should you get these recommendations?

**Options:**

- **A.** A. Azure Advisor  Cost ✅
- **B.** B. Cost analysis (Accumulated costs)
- **C.** C. Pricing calculator
- **D.** D. Azure Monitor Workbooks

**Correct answer:** A

**Explanation:**

Azure Advisor  Cost aggregates cost optimization recommendations: right-size/stop underutilized VMs, purchase Savings Plans/Reservations, remove idle resources, and more. It can be scoped at management group, subscription, or resource group, and links each finding to potential monthly savings and remediation steps.
why the others are incorrect:
B. Cost analysis shows historical/forecasted spend, not prescriptive recommendations.
C. Pricing calculator estimates planned deployments; it doesnt inspect your estate.
D. Workbooks visualize data; they dont generate optimization advice.

---

### Question 4

Contoso wants an alert when the forecast shows the subscription will exceed next months budget. Finance also wants an email notification and webhook to their automation.
Target configuration
What should you implement?

**Options:**

- **A.** A. Budget alert with actual-cost threshold at 100%
- **B.** B. Azure Policy to deny deployments when spend is high
- **C.** C. Export usage to Log Analytics and alert via KQL forecast
- **D.** D. Cost Management budget with a 100% forecast threshold and notifications (email + action group) ✅

**Correct answer:** D

**Explanation:**

A Budget can trigger on forecasted spend crossing a set percentage of the budget, enabling proactive alerts before the overrun happens. Configure the budget at subscription scope, set the forecast threshold to 100%, and add both email recipients and an action group (for webhook/automation). This satisfies the forecast requirement and the Finance notification path.
why the others are incorrect:
A. Triggers only when actual costs have already hit 100%too late.
B. Azure Policy doesnt evaluate costs; it governs resource configurations.
C. Possible but heavy: requires exports, KQL, and manual forecastingunnecessary when budgets do it natively.

---

### Question 5

Contoso has a storage account stprod01 used by an app in VNet-App/Subnet-API. You have to restrict data-plane access to that subnet and still allow Azure Backup to write backups to the account. Do not open the account to the public internet.
Current state
What should you configure on stprod01?

**Options:**

- **A.** A. Selected networks + add Subnet-API only
- **B.** B. Selected networks + add Subnet-API + enable Allow trusted Microsoft services ✅
- **C.** C. Selected networks + add Subnet-API + add app public IP
- **D.** D. Private endpoint + disable public network access, no other change

**Correct answer:** B

**Explanation:**

Storage firewalls set to Selected networks allow traffic only from added subnets (via service endpoints) and permitted exceptions. Azure Backup is a trusted Microsoft service; enabling Allow trusted Microsoft services to access this storage account lets Backup reach the account without exposing it publicly. Adding Subnet-API locks access to the app subnet; no public internet exposure.
why the others are incorrect:
A. Blocks Azure Backup (trusted services not allowed).
C. Public IP exceptions broaden exposure and dont help Backup (it doesnt originate from that IP).
D. Private endpoints work, but youd also need Backup to target the private endpoint and DNS; requirement didnt mandate private access for Backuptrusted services are the simpler fit.

---

### Question 6

Fabrikam must lock down storage account stcoreeu so no public network access is possible. All access must come from on-prem via ExpressRoute private peering to Azure VNets. Apps run in VNet-Hub and VNet-Spoke1 (peered).
Environment
What should you implement to meet the requirement?

**Options:**

- **A.** A. Service endpoints on both VNets; set Selected networks
- **B.** B. Selected networks; add on-prem public IP ranges
- **C.** C. Create a private endpoint in VNet-Spoke1; disable public network access; integrate privatelink DNS ✅
- **D.** D. NSG rules to deny Internet; keep storage firewall disabled

**Correct answer:** C

**Explanation:**

To eliminate public exposure, use a Private Endpoint for stcoreeu. Then disable public network access on the account so only the private interface is reachable. Configure privatelink DNS (e.g., privatelink.blob.core.windows.net) and link it to VNet-Spoke1 (and resolve from on-prem via conditional forwarders). Traffic from on-prem over ER private peering reaches the private endpoint; no public paths remain.
why the others are incorrect:
A. Service endpoints still use the public endpoint; they dont block the internet path outright.
B. IP firewall uses public IP allowlists; requirement is no public access.
D. NSGs dont control storage service exposure; without storage firewall/PE, the public endpoint still exists.

---

### Question 7

You have an Azure storage account named storage1.
You need to ensure that a user named User1 can access storage1 only from January 1, 2026 to January 31, 2026.
What should you do?

**Options:**

- **A.** A. Create a conditional access policy for User1
- **B.** B. Provide User1 with a shared access signature (SAS) ✅
- **C.** C. Provide User1 with a storage1 access key
- **D.** D. Use a condition when assigning User1 an RBAC role on storage1

**Correct answer:** B

**Explanation:**

A shared access signature (SAS) is designed for this exact kind of requirement because it provides delegated access with granular controls over permissions, accessible resources, and how long the SAS is valid. Microsofts Azure Storage SAS documentation explicitly lists validity duration as one of the controls and explains that stored access policies can define the start time and expiry time for a SAS.
That makes SAS the best answer for a fixed access window from January 1, 2026 through January 31, 2026. In real implementations, Microsoft recommends a user delegation SAS when possible because it is secured with Microsoft Entra credentials rather than the storage account key.
Why the other options are incorrect:
 A. Create a conditional access policy for User1  Conditional Access is not the feature used to set a simple start-and-end access window for Azure Storage data in this way. Microsofts current storage guidance discusses Conditional Access in the context of protecting storage accounts with Microsoft Entra Conditional Access policies and notes that you must disallow Shared Key authorization to use those policies. That is a different control objective from issuing a time-bounded access token for a specific period.
 C. Provide User1 with a storage1 access key  Storage account access keys are far too broad for this requirement. Microsoft says access keys provide full access to the storage accounts data and the ability to generate SAS tokens, so they do not enforce a limited validity window such as January 131, 2026.
 D. Use a condition when assigning User1 an RBAC role on storage1  Azure RBAC conditions are for more fine-grained authorization checks such as attributes on requests or resources. Microsofts role-assignment condition documentation describes them as optional checks and gives examples like requiring an object to have a specific tag; it does not describe them as the mechanism for setting a simple calendar-based access period for storage access.

---

### Question 8

Contosos devs are working remotely for one week. You have to let them browse blobs in stdev01 via the Azure portal from their home networks, while keeping the account otherwise restricted. The account currently uses Selected networks with only VNet-Dev/Subnet-Tools allowed. You must avoid creating private endpoints.
What should you do?

**Options:**

- **A.** A. Add the developers current public IPs to the storage firewall IP rules ✅
- **B.** B. Enable Blob public access on the account
- **C.** C. Generate SAS for each container; no firewall changes needed
- **D.** D. Switch firewall to All networks; re-enable Selected networks next week

**Correct answer:** A

**Explanation:**

With firewalls set to Selected networks, remote clients must be allowed by IP rules. Add the devs home public IPs for the week, then remove them later. This preserves restricted posture and avoids private endpoint setup.
why the others are incorrect:
B. Blob public access controls anonymous blob/container ACLs, not network firewall.
C. SAS doesnt bypass storage firewalls; network rules still apply.
D. Opening to All networks violates the security requirement, even temporarily.

---

### Question 9

Contoso has no on-prem AD. Windows 11 Azure VMs are Entra IDjoined. Users must access Azure Files over SMB using their Entra identities. No domain controllers or AAD DS may be deployed.
Environment

**Options:**

- **A.** A. Local users + share keys
- **B.** B. Azure AD DS domain join
- **C.** C. NTFS only, no RBAC
- **D.** D. Entra Kerberos + SMB data roles ✅

**Correct answer:** D

**Explanation:**

Use Microsoft Entra Kerberos for Azure Files to enable SMB authentication with Entra identities (no AD DS/AAD DS required). Then grant RBAC at the share or account: Storage File Data SMB Share {Reader/Contributor/Owner}. Apply NTFS ACLs as needed.
why the others are incorrect:
A. Uses shared keys, not identity-based SMB.
B. Adds AAD DS you said you cant deploy.
C. NTFS alone wont authenticate users; need identity + RBAC.

---

### Question 10

Fabrikam has on-prem AD DS and hybrid-joined VMs in Azure. Users must access Azure Files over SMB using their existing AD accounts and NTFS ACLs. You must not rely on Entra-only Kerberos.
Environment

**Options:**

- **A.** What should you configure?
- **B.** A. Entra Kerberos only
- **C.** B. AD DS auth for Azure Files ✅
- **D.** C. Local users per share
- **E.** D. SAS tokens for SMB

**Correct answer:** C

**Explanation:**

Enable Active Directory Domain Services authentication for Azure Files on the storage account (set AD domain props). Grant users/groups the Storage File Data SMB Share RBAC role(s) and manage access with NTFS ACLs using their AD identities.
why the others are incorrect:
A. Doesnt use your AD identities/SIDs.
C. Not identity-based; hard to audit/scale.
D. SAS is for REST; SMB uses Kerberos/NTLM with AD.

---

### Question 11

A line-of-business app running on an Azure VM (system-assigned managed identity) must upload and list files in an Azure file share using REST (not SMB). You must grant least privilege via RBAC.
Which role should you assign to the managed identity?

**Options:**

- **A.** A. Storage File Data SMB Share Reader
- **B.** B. Storage Blob Data Contributor
- **C.** C. Storage File Data Contributor ✅
- **D.** D. Reader

**Correct answer:** C

**Explanation:**

Correct answer: C. Storage File Data Contributor
Youre using a managed identity and the Azure Files REST API (not SMB).
The role that grants data-plane permissions for Azure Files over REST is Storage File Data Contributor. It allows create/read/update/delete on shares, directories, and files via REST, which covers upload and list files.
Assign it at the file share scope (least privilege). The app then requests an OAuth token for https://storage.azure.com/ and calls REST endpoints (e.g., PUT file, PUT range, GET directory?resource=directory, LIST).
Why the others are incorrect:
A. Storage File Data SMB Share Reader  SMB only and read-only. No REST writes.
B. Storage Blob Data Contributor  Blob service, not Azure Files.
D. Reader  Management plane only; no data-plane access to files.

---

### Question 12

Contosos data team is moving Spark jobs to Azure. You have to provide atomic directory operations (rename/move) and POSIX-like ACLs for large analytics workloads. The existing GPv2 account hosts 40 TB of data and does not have hierarchical namespace enabled. Minimal downtime is acceptable; correctness is mandatory.
What should you do?

**Options:**

- **A.** A. Create a new StorageV2 account with hierarchical namespace enabled and migrate data ✅
- **B.** B. Turn on hierarchical namespace on the existing account in-place
- **C.** C. Upgrade to Premium BlockBlobStorage to gain directory semantics
- **D.** D. Enable SFTP; Spark will infer directory support automatically

**Correct answer:** A

**Explanation:**

Hierarchical namespace (HNS)the foundation of Azure Data Lake Storage Gen2is selected only at account creation. Its what gives you atomic directory operations and POSIX-style ACLs Spark expects. Therefore, the correct approach is to provision a new HNS-enabled account and migrate. Use tools like AzCopy v10 (sync/incremental), DistCp, or ADLS Gen2 SDKs to minimize downtime and cut over cleanly.
Why the other options are incorrect:
B. In-place HNS enablement isnt supported; you cant toggle HNS on an existing account. Any approach claiming this would risk data and is not available in Azure.
C. Premium BlockBlobStorage improves performance/latency but does not add HNS or directory semantics; its still a flat namespace for Blob.
D. Enabling SFTP provides an SFTP endpoint but doesnt create HNS or POSIX semantics by itself; Sparks directory operations still rely on HNS capabilities.

---

### Question 13

Fabrikam wants to enforce identity-based access only to Blob datano account keys, no shared-key SAS. You have to keep the public endpoint but require OAuth (Microsoft Entra) for data-plane access.
Current state
What should you change?

**Options:**

- **A.** A. Disable public network access and use private endpoints only
- **B.** B. Leave keys enabled and disable Blob public access
- **C.** C. Require secure transfer only (HTTPS) and TLS 1.2+
- **D.** D. Disable shared key access on the account and use Entra RBAC ✅

**Correct answer:** D

**Explanation:**

To prevent shared key authentication (account keys and key-based SAS) and force OAuth, set Allow storage account key access = Disabled. Then grant data-plane RBAC (e.g., Storage Blob Data Reader/Contributor/Owner) to identities in Microsoft Entra ID. Clients must request tokens for https://storage.azure.com/ and call Blob APIs with OAuthshared keys will no longer work.
Why the other options are incorrect:
A. Private endpoints remove public routing but dont disable shared keys; a caller on the private network could still use account keys unless you explicitly turn them off.
B. Disabling Blob public access blocks anonymous (public) access but does not affect authentication with account keys or key-based SAS. Shared keys would still function.
C. Secure transfer required + TLS 1.2 harden transport but dont change the auth method; shared keys remain valid unless explicitly disabled.

---

### Question 14

A third-party vendor must upload files to a single container in stfiles01 over SFTP using SSH keys. You have to keep the scope as narrow as possible and avoid domain joins.
What should you configure?

**Options:**

- **A.** A. Enable AD DS auth for Azure Files and grant share permissions
- **B.** B. Enable SFTP; create a local user with an SSH public key and container-scoped permissions ✅
- **C.** C. Generate SAS tokens and have the vendor use SFTP with SAS
- **D.** D. Enable NFSv3 for Blob and share the export

**Correct answer:** B

**Explanation:**

For Azure Blob SFTP, enable SFTP at the storage account, then create local users with SSH keys and assign container-level permissions (Container/Directory/File). This provides least-privilege, SFTP-native access without Entra/AD DS.
Why the other options are incorrect:
A. AD DS for Azure Files applies to SMB on Azure Files, not Blob SFTP; wrong service and protocol.
C. SAS with SFTP isnt a thing; SAS is HTTP(S)-based and wont authenticate an SFTP session.
D. Blob NFSv3 is for POSIX clients over NFS, not SFTP; it also requires different network and client considerations and doesnt meet the vendors SFTP requirement.

---

### Question 15

Fabrikam is lifting a Linux analytics app to Azure. You have to create an NFS file share with low, predictable latency and no domain controllers. SMB is not required.
Which configuration should you create?

**Options:**

- **A.** A. GPv2 account + SMB share
- **B.** B. GPv2 account + NFS share
- **C.** C. Premium FileStorage account + NFS share ✅
- **D.** D. Premium FileStorage account + SMB share

**Correct answer:** C

**Explanation:**

Azure Files NFS 4.1 shares are supported on Premium FileStorage accounts. Premium gives low-latency, provisioned performance appropriate for analytics pipelines, and it doesnt require AD DS/AAD DS. Create a FileStorage (Premium) account, enable NFS, and create the shareLinux clients mount via NFSv4.1.
Why the other options are incorrect:
A. GPv2 + SMB: SMB is a different protocol; not NFS, and doesnt meet the requirement.
B. GPv2 + NFS: NFS for Azure Files is not supported on Standard GPv2; its Premium-only.
D. Premium + SMB: Premium is fine, but this config is SMB, not the requested NFS.

---

### Question 16

Fabrikam applies a Deny policy for approved VM SKUs at the subscription scope. You have to exclude the RG-Lab resource group from this policy without changing enforcement anywhere else.
Current assignment
What should you do?

**Options:**

- **A.** A. Remove the policy from the subscription and reassign it to every other RG manually
- **B.** B. Edit the policy definition to add an if-condition that skips RG-Lab
- **C.** C. Add RG-Lab to the assignments Excluded scopes, or create a policy exemption at RG-Lab ✅
- **D.** D. Assign Reader to RG-Lab so the policy doesnt apply there

**Correct answer:** C

**Explanation:**

Use assignment scoping to exclude a child scope. You can either add Excluded scopes in the existing subscription-level assignment to omit RG-Lab, or create a targeted exemption at RG-Lab (e.g., category Waiver or Mitigated, optionally with an expiry). Both approaches keep the subscription-level governance intact while cleanly excluding the lab RG.
Why the others are incorrect:
A: Operationally heavy and error-prone; you lose centralized control.
B: Policy definitions should remain generic; exclusions belong at assignment or via exemptions.
D: RBAC roles (like Reader) do not influence policy evaluation; policy still applies.

---

### Question 17

A nightly pipeline overwrote reports/finances.xlsx. You have to restore just that blob without rolling back the whole container.
Which feature should you enable?

**Options:**

- **A.** A. Soft delete (blobs)
- **B.** B. Blob versioning ✅
- **C.** C. Container soft delete
- **D.** D. Change feed

**Correct answer:** B

**Explanation:**

Blob versioning keeps every update as an immutable version. After an overwrite, the previous bytes remain available by versionId. You can read/copy/promote that version to make it current, restoring precisely this one blob without touching other objects.
Why the others are incorrect:
A. Soft delete protects deletes, not overwrites; theres nothing to undelete.
C. Container soft delete only helps if the entire container was deleted; it cannot roll back one blobs content.
D. Change feed is an operational log (for auditing/ETL) and doesnt hold data snapshots for restore.

---

### Question 18

Fabrikam needs to restore the entire cn-prod container to Friday 18:00 UTC in-place within the same account. You have to enable the features that make this possible.
Current settings
What configuration enables this recovery?

**Options:**

- **A.** A. Soft delete only
- **B.** B. Versioning only
- **C.** C. Versioning + Change feed + PITR ✅
- **D.** D. Container soft delete only

**Correct answer:** C

**Explanation:**

Container point-in-time restore reconstructs the containers state at a timestamp by replaying operations. It requires (1) versioning to preserve historical object states, (2) change feed to supply an ordered log of changes, and (3) PITR enabled with a retention window covering the target time. With all three, Azure can roll cn-prod back to exactly Friday 18:00, consistently undoing mass overwrites/deletes.
Why the others are incorrect:
A. Soft delete can undelete individual blobs but cannot rebuild a consistent container state at a specific time.
B. Versioning alone would force manual per-blob rollbacksslow, error-prone, and not a true timestamp restore.
D. Container soft delete only restores if the whole container was deleted; it wont rewind an existing, corrupted container.

---

### Question 19

Policy: keep the current blob and versions from the last 90 days only. You have to automate cleanup.
What should you configure?

**Options:**

- **A.** A. Lifecycle rule: delete previous versions > 90 days ✅
- **B.** B. Set access tier to Cool
- **C.** C. Legal hold (immutability)
- **D.** D. Change feed

**Correct answer:** A

**Explanation:**

Blob lifecycle management can target previous versions with age filters (e.g., delete previous versions older than 90 days). Rules run continuously at the chosen scope (account/container/prefix), enforcing retention automatically while controlling storage cost.
Why the others are incorrect:
B. Cool affects pricing/latency, not retention; old versions persist and keep accruing cost.
C. Legal hold blocks deletion (the opposite of pruning) until the hold is lifted/expired under strict controls.
D. Change feed is an event log; it doesnt delete or manage stored data.

---

### Question 20

You see this Bicep file:
param vnetName string
resource vnet ‘Microsoft.Network/virtualNetworks@2023-04-01‘ existing = {
  name: vnetName
}
resource subnet ‘Microsoft.Network/virtualNetworks/subnets@2023-04-01‘ = {
  name: ‘${vnet.name}/app‘
  properties: {
    addressPrefix: ‘10.0.1.0/24‘
  }
}
What does existing on vnet mean?

**Options:**

- **A.** A. Create new VNet
- **B.** B. Reference existing VNet ✅
- **C.** C. Import module
- **D.** D. Output resourceId

**Correct answer:** B

**Explanation:**

existing declares a handle to a pre-existing resource so the template can link children (like a subnet) or read properties/IDs without deploying the parent. The VNet wont be created/modified; only the subnet is deployed beneath that known VNet.
Why the others are incorrect:
A. Create new VNet  New resources omit existing; this flag prevents creation.
C. Import module  Modules use the module keyword and a file path/URI, not existing.
D. Output resourceId  Outputs use an output declaration; existing is unrelated.

---

### Question 21

Hierarchy &amp; assignments

Notes: Role evaluations are cumulative; the **most permissive** applicable role at/above the target scope is effective. Built-in roles: **Owner**, **Contributor**, **Reader**, **User Access Administrator**, etc.

**Scenario:** You’re reviewing permissions for **DevOpsTeam** on the **stlogs storage account** in **RG-Logs** (Sub-Prod). Based on the table above, what is DevOpsTeam’s **effective role** on stlogs?

**Options:**

- **A.** A. Reader
- **B.** B. Owner
- **C.** C. Contributor ✅
- **D.** D. User Access Administrator

**Correct answer:** C

**Explanation:**

DevOpsTeam has **Contributor at the management group (Corp-MG)**. That assignment **flows down** to all child subscriptions, resource groups, and resources—including stlogs in RG-Logs. Although DevOpsTeam is only **Reader at the subscription**, the effective permission is the **union** of assignments, so the **higher permission (Contributor) from the higher scope** applies at the resource.

**Why the others are incorrect:**

- **A. Reader:** DevOpsTeam does have Reader at Sub-Prod, but it’s **superseded** by Contributor at the higher scope.

- **B. Owner:** No Owner is assigned anywhere for DevOpsTeam, so Owner does **not** apply.

- **D. User Access Administrator:** That role wasn’t assigned to DevOpsTeam at any scope here.

---

### Question 22

You have an Azure subscription that contains the virtual machines shown in the following table.

The subscription contains a storage account named contoso2024 as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM2 can connect to contoso2024 by using 150.120.10.10.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

When a storage account is set to **Selected networks**, access is allowed only from:

- **Explicit IP rules** (public IPs or ranges), and/or

- **VNet rules** (subnets with Microsoft.Storage service endpoints or private endpoints)

Here, the storage account’s firewall explicitly includes **150.120.10.10**, which is **VM2’s public IP**. That IP rule alone is sufficient to permit traffic **from VM2** to **contoso2024** when the request originates from that public IP (e.g., outbound NAT). The VM’s subnet (whether it’s Subnet1 or Subnet2) does **not** matter for the IP-allowlist path; the firewall evaluates the **source public IP** and finds a match, so the connection is **allowed**.

If the account also had VNet rules, VM2 could alternatively connect via a service endpoint/private endpoint path if its subnet were included; but that’s **not required** for this statement. The question asks specifically about using **150.120.10.10**, and since that IP is on the allowlist, **VM2 can connect**.

Why “No” is incorrect

“No” would be correct only if the source IP were **not** allowed (no matching IP rule) and there were **no applicable VNet rule**. In this case, an explicit **IP rule** for **150.120.10.10** exists, so denying the connection would contradict the configured firewall policy.

---

### Question 23

You have two Azure subscriptions named Sub1 and Sub2 that are linked to separate Microsoft Entra tenants.

You have the virtual networks shown in the following table.

Which virtual networks can you peer with VNet1?

**Options:**

- **A.** A. VNet2 only
- **B.** B. VNet2 and VNet3 only
- **C.** C. VNet2 and VNet4 only
- **D.** D. VNet2, VNet3, and VNet4 only
- **E.** E. VNet2, VNet3, VNet4, and VNet5 ✅
- **F.** F. VNet3 and VNet5 only

**Correct answer:** E

**Explanation:**

Azure **VNet peering** supports peering across **regions (global VNet peering)**, **subscriptions**, and even **different Microsoft Entra tenants**, provided the **address spaces do not overlap** and you have the **necessary permissions** in each tenant/subscription to create the peering from both sides (or use someone with access to both). The scenario states Sub1 and Sub2 are in separate tenants—this is supported. Therefore, VNet1 can be peered with **VNet2** (same subscription/region), **VNet3** (same subscription, different region), **VNet4** (different subscription/tenant, same region), and **VNet5** (different subscription/tenant, different region). Nothing in the prompt indicates overlapping CIDRs or unsupported combinations, so **all four** are valid peers.

**Why the other options are incorrect**

- A/B/C/D/F: Each omits at least one VNet that is valid under Azure peering rules (cross-subscription, cross-region, **cross-tenant** are all allowed, assuming non-overlapping IP spaces and proper permissions). Only **E** lists the full set of VNets that can be peered with **VNet1**.

---

### Question 24

You have an Azure subscription named Subscription1 that contains the resources as shown in the following table.

You plan to configure Azure Backup reports for Vault1.

You are configuring the diagnostic settings for the AzureBackupReports log.

Which **Log Analytics workspaces** can you use for the Azure Backup reports of Vault1?

**Options:**

- **A.** A. Analytics1 only
- **B.** B. Analytics2 only
- **C.** C. Analytics3 only
- **D.** D. Analytics1, Analytics2, and Analytics3 ✅

**Correct answer:** D

**Explanation:**

Diagnostic settings for a **Recovery Services vault** can send logs (including **AzureBackupReports**) to a **Log Analytics workspace** **regardless of the workspace’s region**. Unlike the “archive to Storage account” destination—which requires the storage account to be in the **same region** as the emitting resource—sending diagnostics to **Log Analytics** **does not** require regional co-location with the vault.

Therefore, you can select **any** of the workspaces (**Analytics1**, **Analytics2**, **Analytics3**) for **Vault1**’s Azure Backup reports, assuming you have the necessary permissions and the workspaces are in the same **tenant**.

**Why the other options are incorrect**

- Analytics1 only / Analytics2 only / Analytics3 only: Each unnecessarily limits the choice to a single workspace. All three are valid targets for Vault1’s Azure Backup diagnostics.

---

### Question 25

You have an Azure subscription named Sub1.

You plan to deploy a multi-tiered application that will contain the tiers shown in the following table.

You need to recommend a networking solution to meet the following requirement:

- **Ensure that communication between the web servers and the business logic tier spreads equally across the virtual machines.**

Which Azure resource should you recommend for the above requirement?

**Options:**

- **A.** A. Application Gateway (Standard)
- **B.** B. Application Gateway (WAF)
- **C.** C. Internal Load Balancer (Standard) ✅
- **D.** D. Network Security Group (NSG)
- **E.** E. Public Load Balancer (Standard)
- **F.** F. Azure Traffic Manager

**Correct answer:** C

**Explanation:**

Use a **Standard Internal Load Balancer** when you need **layer-4 (TCP/UDP)** load distribution **inside** a virtual network (not Internet-facing). Placing the business-logic VMs in the ILB’s backend pool and using a probe (e.g., TCP/HTTP) ensures the web tier’s traffic is **evenly distributed** only to **healthy** instances. This meets the requirement to “spread equally across the virtual machines” within the private tier boundary.

**Why the other options are incorrect**

- **A/B – Application Gateway (Standard/WAF):** L7 HTTP(S) reverse proxy typically used for **client → web** scenarios (public or private). It’s overkill here and not the typical choice for **intra-tier L4** fan-out from web to app VMs.

- **D – NSG:** Security filtering only (allow/deny). **No** load-balancing capability.

- **E – Public Load Balancer:** Internet-facing frontend. The business logic tier is **internal**, so a public frontend is not appropriate.

- **F – Traffic Manager:** **DNS-based** global traffic steering across endpoints (regions/services). It doesn’t distribute flows among VMs inside a VNet.

---

### Question 26

You have a virtual network named VNet1 that has the configuration shown in the following exhibit.

Based on the information presented, complete the following statement with the correct answer choice.

**“Before a virtual machine on VNet1 can receive an IP address from 192.168.1.0/24, you must first _______________________.”**

**Options:**

- **A.** A. add a network interface
- **B.** B. add a subnet
- **C.** C. add an address space ✅
- **D.** D. delete a subnet
- **E.** E. delete an address space
- **F.** F. enable IP forwarding on the NIC

**Correct answer:** C

**Explanation:**

A VM’s private IP must come from a **subnet**, and every subnet must be **within the VNet’s address space**. Since **VNet1** currently has only **10.2.0.0/16**, it cannot host subnets carved from **192.168.1.0/24** until that **CIDR is added to the VNet’s address space**.

So the **first** prerequisite is to **add the address space 192.168.1.0/24** to VNet1. After that, you would create a **subnet** inside that range (e.g., 192.168.1.0/25) and place VMs there to receive IPs from 192.168.1.0/24.

**Why the other options are incorrect**

- **A. add a network interface:** You can’t assign a NIC an IP from a prefix the VNet doesn’t own. Address space must come first.

- **B. add a subnet:** A subnet can only be created **after** the VNet includes the parent CIDR. You can’t create a 192.168.1.0/x subnet while the VNet only has 10.2.0.0/16.

- **D. delete a subnet:** Not relevant; nothing to delete to add 192.168.1.0/24.

- **E. delete an address space:** You need to **add**, not delete, the 192.168.1.0/24 space.

- **F. enable IP forwarding on the NIC:** Unrelated to IP assignment; used for routing/NVA scenarios.

---

### Question 27

You create a Recovery Services vault backup policy named Policy1 as shown in the following exhibit.

Based on the information provided, select the answer choice that completes the following statement correctly.

**“The backup that occurs on Sunday, March 1, will be retained for ___________.”**

**Options:**

- **A.** A. 30 days
- **B.** B. 10 weeks
- **C.** C. 36 months
- **D.** D. 12 months
- **E.** E. 7 years
- **F.** F. 10 years ✅

**Correct answer:** F

**Explanation:**

Azure VM backup retention evaluates a restore point against **daily, weekly, monthly, and yearly** retention tiers. When a restore point matches a **yearly retention point** (for example, a backup taken on **March 1** when the policy’s **yearly retention** is configured to retain the **March** backup), that restore point is promoted to **yearly** and kept for the **Yearly retention period** defined in the policy.

In the exhibit, the backup on **Sunday, March 1** aligns with the **yearly** schedule and therefore inherits the **10 years** retention defined for yearly backups—regardless of shorter daily/weekly/monthly settings.

**Why the other options are incorrect**

- **30 days:** Daily retention; does not apply when the point is selected as a **yearly** retention point.

- **10 weeks:** Weekly retention; superseded by the **yearly** tier for this date.

- **36 months / 12 months / 7 years:** These are **monthly** or other durations, not the configured **yearly = 10 years** value for the March retention point.

---

### Question 28

You have an Azure subscription named Sub1 that contains the resources shown in the following table.

**Sub1 contains the following alert rule:**

- **Name**: Alert1

- **Scope**: All resource groups in Sub1

– Include all future resources

- **Condition**: All administrative operations

- **Actions**: Action1

**Sub1 contains the following alert processing rule**

- **Name**: Rule1

- **Scope**: Sub1

- **Rule type**: Suppress notifications

- **Apply the rule**: On a specific time

– **Start**: August 10, 2022

– **End**: August 13, 2022

For the statement below, select Yes if the statement is true. Otherwise, select No.

**“If you create a resource group in Sub1 on August 11, 2022, Alert1 is listed in the Azure portal.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Choice Yes is correct. Alert1’s scope is configured at the **subscription level (Sub1)**, which automatically includes **all existing and future resource groups** within that subscription. Therefore, when a new resource group is created in Sub1 —for example, on August 11, 2022—it inherits that alert scope. As a result, **Alert1 will appear in the Azure portal for the newly created resource group** without any additional configuration.

The No option is incorrect because subscription-scoped alerts are not limited to pre-existing resource groups; they dynamically apply to all resources under that subscription, including those created after the alert definition.

---

### Question 29

You have an Azure subscription that contains the resources shown in the following table.

You need to create a network interface named NIC1 without creating additional resources.

In which region can you create NIC1?

**Options:**

- **A.** A. East US only ✅
- **B.** B. West Europe only
- **C.** C. North Europe only
- **D.** D. Any region

**Correct answer:** A

**Explanation:**

Choice A is correct.

Network interfaces (NICs) are scoped to a region and must be created in the same region as the virtual network/subnet they attach to. Because NIC1 must connect to a subnet in VNET1, and VNET1 exists in East US, NIC1 must also be created in East US.

Creating NIC1 in any other region would require additional resources (for example, another VNet/subnet in that region or moving dependencies), which the question explicitly forbids.

A NIC has three important scoping constraints:

Subscription

Region

VNet

Azure enforces co-location:

NIC ↔ VNet/Subnet ↔ VM

All must reside in the same subscription and region. This ensures Layer-2 adjacency and simplifies IP management.

Also, after a NIC is created, you cannot change the VNet to which it is attached. To move it, you would need to:

Create a new NIC in the target VNet/region

Attach the new NIC to the VM

Reconfigure dependencies

**Why the other options are incorrect**

B. West Europe❌ Incorrect. West Europe is a different region. You would need a West Europe VNet/subnet (an additional resource), violating the stated constraint.

C. North Europe❌ Incorrect. North Europe is not where VNET1 exists. Creating NIC1 there would require new networking resources.

D. Multiple alternate regions❌ Incorrect. These regions do not host VNET1, so additional networking resources would still be required.

E. West Europe only❌ Incorrect. NIC1 cannot exist there without a West Europe VNet/subnet to join.

F. North Europe only❌ Incorrect. Same issue as above—NIC1 requires a VNet/subnet in the same region.

---

### Question 30

You have an Azure subscription that contains the virtual networks shown in the following table.

The subscription contains the virtual machines shown in the following table.

All the virtual machines have only private IP addresses.

You deploy an Azure Bastion host named Bastion1 to VNet1.

To which virtual machines can you connect through Bastion1?

**Options:**

- **A.** A. VM1 Only
- **B.** B. VM1 and VM2 only ✅
- **C.** VM1 and VM3 only
- **D.** VM1, VM2 and VM3

**Correct answer:** B

**Explanation:**

Choice B is correct. Azure Bastion provides RDP/SSH over TLS to virtual machines located in the same virtual network as the Bastion host and to VMs in directly peered VNets. Since Bastion1 is deployed in VNet1, it can access:

VM1 → Located in VNet1 (same VNet as Bastion1)

VM2 → Located in VNet2, which is directly peered with VNet1

However, VM3 cannot be reached because it is deployed in VNet3, and there is no direct peering between VNet1 and VNet3. Virtual network peering is not transitive:

VNet1 ↔ VNet2 and VNet2 ↔ VNet3 does not imply VNet1 ↔ VNet3

**Why the other options are incorrect**

A: Too restrictive. Azure Bastion can also connect to VMs in directly peered VNets, so VM2 is accessible.

C: Incorrect because VM3 resides in a VNet that is not directly peered with VNet1, making it inaccessible through Bastion1.

D: Incorrect because it includes VM3, which cannot be reached due to the non-transitive nature of VNet peering.

---

### Question 31

You have an Azure subscription that contains the following resources:
a storage account named storage123
a container instance named container1
The subscription contains a virtual network named VirtualNet4 that has the following subnets:
SubnetA – has a Microsoft.Storage service endpoint.
SubnetB – container1 is deployed to SubnetB.
SubnetC – No resources are connected to SubnetC.
You plan to deploy an Azure container instance named container5 to VirtualNet4.
To which subnets can you deploy container5?

**Options:**

- **A.** A. SubnetA, SubnetB, and SubnetC
- **B.** B. SubnetB and SubnetC only ✅
- **C.** C. SubnetB only
- **D.** D. SubnetC only

**Correct answer:** B

**Explanation:**

Azure Container Instances must be deployed to a delegated subnet. Microsofts current deployment guidance says you can use an existing subnet in which a container group is already deployed or an existing subnet emptied of all other resources and configuration. It also states that the subnet used for container groups can contain only container groups.
That makes SubnetB valid because it already hosts container1, so it is the kind of subnet that can host additional container groups. SubnetC is also valid because it has no connected resources, so it can be delegated and used for the new container instance. SubnetA is not valid because it already has subnet-level configuration in place, namely a Microsoft.Storage service endpoint, so it is not an empty subnet with no prior configuration for ACI use.
Why the other options are incorrect:
 A. SubnetA, SubnetB, and SubnetC  This is incorrect because SubnetA is not a clean candidate for ACI deployment. Microsoft says an existing subnet must either already host a container group or be emptied of other resources and configuration before ACI deployment. A service endpoint is existing subnet configuration, so SubnetA does not meet that requirement.
 C. SubnetB only  This is too restrictive. SubnetB is valid because it already contains a container group, but SubnetC is also valid because it has no connected resources and can be delegated for Azure Container Instances.
 D. SubnetC only  This ignores the fact that Microsoft explicitly allows deploying more container groups to a subnet that already contains a container group. Since container1 is already in SubnetB, SubnetB remains a valid deployment target for container5.

---

### Question 32

You have an Azure subscription with VMs connected to VNet1. You plan to onboard the VMs to Azure Monitor VM Insights.
You must ensure all VM-toAzure Monitor traffic goes privately via VNet1 only (no public endpoints).
What should you create first?

**Options:**

- **A.** A. A private endpoint to Azure Monitor
- **B.** B. An Azure Monitor Private Link Scope (AMPLS) ✅
- **C.** C. A Data Collection Rule (DCR)
- **D.** D. A Log Analytics workspace
- **E.** E. A Data Collection Endpoint (DCE)
- **F.** F. A Private DNS zone for Azure Monitor

**Correct answer:** B

**Explanation:**

To force Azure Monitor traffic over your VNet, you must use Azure Monitor Private Link. The control-plane object that enables this is the Azure Monitor Private Link Scope (AMPLS).
The correct high-level sequence is:
1. Create AMPLS and link your Azure Monitor resources to it (e.g., Log Analytics workspace, Insights components).
2. Create Private Endpoints in VNet1 that target the AMPLS.
3. Configure required Private DNS resolution to the private endpoints.
4. (For AMA/VM Insights) Apply your DCR (and DCE if used) to the VMs.
Creating AMPLS first is essential; private endpoints for Azure Monitor must reference an existing AMPLS. This is what enforces that VM agents reach Azure Monitor privately via VNet1 rather than public endpoints.
Why the other options are incorrect
A. Private endpoint: Needed, but you cant create the Azure Monitor PE without an AMPLS to target. AMPLS comes first.
C. DCR: Defines what data to collect; it doesnt establish private connectivity.
D. Log Analytics workspace: Required for VM Insights data storage, but it doesnt enforce private paths by itself.
E. DCE: Used by AMA to route data, but it doesnt create the private link to Azure Monitor services.
F. Private DNS zone: Required after you have private endpoints; DNS alone cant enable private access without AMPLS + PEs.

---

### Question 33

Contoso has a Microsoft Entra tenant (contoso.onmicrosoft.com) and owns contoso.com at a third-party DNS registrar. You must allow creating users with UPNs like [email protected] in the existing tenant.
Which three actions should you perform in sequence?
Actions (use each at most once)
1. Verify the domain.
2. Add a record to the public contoso.com DNS zone.
3. Create an Azure DNS zone.
4. Configure company branding.
5. Add a Microsoft Entra tenant.
6. Add a custom domain name.
Select the correct three-step sequence.

**Options:**

- **A.** A. 2 ? 3 ? 6
- **B.** B. 3 ? 2 ? 6
- **C.** C. 6 ? 1 ? 2
- **D.** D. 6 ? 2 ? 1 ✅
- **E.** E. 2 ? 6 ? 1
- **F.** F. 5 ? 6 ? 1

**Correct answer:** D

**Explanation:**

Choice D is correct. You first add the custom domain (6) in Microsoft Entra ID so the service knows you intend to use contoso.com. Entra then gives you a verification record to publish; add that TXT (or MX) record in the public DNS zone at your third-party registrar (2). After the record propagates, return to Entra and complete domain verification (1). Once verified, you can assign UPNs like [email protected].
Why the others are incorrect
A: Adding the DNS record before the domain exists in Entra (2 ? ) wont work; the verification string comes from adding the domain (6). Also, creating an Azure DNS zone (3) isnt required when DNS is hosted elsewhere.
B: Same issueAzure DNS zone creation (3) is unnecessary, and you still havent added the domain in Entra first.
C: You cant verify (1) before publishing the Entra-provided record (2).
E: You must add the domain (6) to generate the verification record before you can verify.
F: A new tenant (5) isnt needed; the question already gives you one.

---

### Question 34

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
Fabrikams web app will run on Azure App Service. Storage and Azure SQL will be reachable only via Private Endpoints in the prod-vnet. You must allow the web app to reach those private endpoints while keeping management simple.
What should you do?

**Options:**

- **A.** A. Configure VNet Integration on the App Service to the vnet-integration subnet ✅
- **B.** B. Assign a public IP to App Service and add NSG rules to allow Storage/SQL
- **C.** C. Enable service endpoints on the App Service
- **D.** D. Create an inbound Private Endpoint for the App Service, while using Express Route for the Main Network

**Correct answer:** A

**Explanation:**

Choice A is correct. The web app needs outbound access to private IPs of Storage/SQL. App Service VNet Integration lets the app egress into your VNet so routes and DNS resolution can reach the Private Endpoints without traversing the public internet. This is the supported and simple pattern for App Service calling private PaaS services, and it avoids exposing public endpoints or managing custom gateways for the app.
Why the others are incorrect
B: A public IP and NSGs dont enable access to a private endpoint; traffic would still be public and wont resolve to private IPs.
C: App Service does not use service endpoints; that feature is for VNets attached to IaaS resources.
D: An App Service Private Endpoint is for inbound private access to the web app, not for the apps outbound calls to Storage/SQL.

---

### Question 35

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
Partners need temporary, secure access to the partner container in a Storage account. Fabrikam wants time-bound access without creating partner user accounts.
What should you do?

**Options:**

- **A.** A. Share the Storage account access keys with partners
- **B.** B. Generate a SAS token for the partner container with start/expiry and minimal permissions ✅
- **C.** C. Assign Storage Blob Data Contributor to Everyone and revoke later
- **D.** D. Publish the container publicly with anonymous write disabled using Microsoft SharePoint

**Correct answer:** B

**Explanation:**

Choice B is correct. A Shared Access Signature (SAS) provides scoped, time-limited permissions (e.g., write/list for 24 hours) without creating identities or disclosing the account keys. It supports least privilege by limiting permissions, IP ranges, and times, and can be invalidated by removing a stored access policy or rotating keys.
Why the others are incorrect
A: Sharing account keys exposes full account permissions and is hard to revoke safely.
C: RBAC to a broad group violates least privilege and is operationally risky.
D: Public access increases exposure and still doesnt give fine-grained, time-bound control.

---

### Question 36

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
Fabrikams web app runs on Azure App Service with VNet Integration into prod-vnet. Azure SQL and Azure Storage are exposed only via Private Endpoints. After enabling Private Endpoints, the app cant connect to SQL or Storage by FQDN.
Which TWO configurations should you implement to restore connectivity while keeping traffic private?

**Options:**

- **A.** A. Create a route table with UDRs to the private endpoint IPs and associate it to the vnet-integration subnet
- **B.** B. Create and link a private DNS zone privatelink.blob.core.windows.net to prod-vnet ✅
- **C.** C. Publish public A records for the storage account that point to the private endpoint IP
- **D.** D. Create and link a private DNS zone privatelink.database.windows.net to prod-vnet ✅
- **E.** E. Enable service endpoints for Storage and SQL on the vnet-integration subnet
- **F.** F. Add static host entries inside App Service for the Storage/SQL endpoints

**Correct answer:** B, D

**Explanation:**

Choice B and D are correct. Private Endpoints require private DNS so that the services public FQDN resolves to the private IP exposed inside your VNet. Linking the privatelink.blob.core.windows.net and privatelink.database.windows.net zones to prod-vnet lets the App Service (via VNet Integration) resolve Storage and SQL to private addresses, keeping data off the public internet and restoring name resolution cleanly.
Why the other options are incorrect
A: UDRs control routing after name resolution; they dont fix DNS.
C: Never advertise Private Endpoint IPs in public DNS.
E: Service endpoints arent used by App Service and arent combined with Private Endpoints.
F: Host file hacks arent supported/operationally scalable for App Service.

---

### Question 37

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
Fabrikam needs private connectivity from the on-premises datacenter to Azure for administration and data access. They want a standards-based tunnel with minimal complexity and no new private circuits.
What should you deploy in Azure to terminate the tunnel?

**Options:**

- **A.** A. NAT Gateway in the GatewaySubnet (Private Route Based)
- **B.** B. Application Gateway v2 (WAF), Multiple Access Control Rules
- **C.** C. Virtual network gateway (VPN, route-based) in the GatewaySubnet ✅
- **D.** D. ExpressRoute circuit

**Correct answer:** C

**Explanation:**

Choice C is correct. A route-based virtual network gateway in the GatewaySubnet is the Azure endpoint for an IPsec/IKE site-to-site VPN. It establishes the encrypted tunnel with the on-premises VPN device and advertises the VNet address space so Fabrikam can reach Azure resources privatelymeeting the requirement without the cost/lead time of ExpressRoute.
Why the other options are incorrect
A: NAT Gateway provides egress SNAT, not VPN termination.
B: Application Gateway is an L7 HTTP(S) load balancer/WAF, unrelated to IPsec tunnels.
D: ExpressRoute is a private circuit solution, not required here and not an IPsec terminator.

---

### Question 38

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
Fabrikam stores product images in a blob container. To reduce costs without manual jobs, images not accessed for 60 days must move to Cool, and after 180 days to Archive.
Which configuration best meets the requirement with the least administrative effort?

**Options:**

- **A.** A. Blob lifecycle management rules on the storage account ✅
- **B.** B. Enable operational backup for blobs in a Backup vault
- **C.** C. Monthly Azure Data Factory pipelines to move blobs to new tiers
- **D.** D. Azure Policy (Append) to set the access tier automatically

**Correct answer:** A

**Explanation:**

Choice A is correct. Lifecycle management is a built-in policy engine for Blob Storage that evaluates object age and last access time (when enabled) and applies actions like move to Cool and move to Archive. Its automatic, cost-effective, and requires no orchestration, directly satisfying the tiering goals.
Why the other options are incorrect
B: Operational backup provides recovery points, not ongoing tier changes.
C: ADF can move data but adds unnecessary pipelines, triggers, and code.
D: Azure Policy can enforce configurations but cannot dynamically retier individual blobs by age/access.

---

### Question 39

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
The web app needs to retrieve connection strings and secrets from Azure Key Vault. Fabrikam wants to avoid managing client secrets and keep administration simple while following least-privilege access.
What should you do?

**Options:**

- **A.** A. Create a service principal and store its client secret in App Service settings
- **B.** B. Enable a system-assigned managed identity on the web app and grant it Key Vault read access ✅
- **C.** C. Store secrets directly as App Settings and sync during deployments
- **D.** D. Assign Storage Account Contributor to the app and read Storage keys directly, Assign Owner to the Head Administrator

**Correct answer:** B

**Explanation:**

Choice B is correct. A system-assigned managed identity gives the app an Azure-managed identity with no credentials to rotate or store. Granting that identity read permissions to Key Vault (via RBAC or access policies) lets the app fetch secrets securely, reduces administrative effort, and aligns with least privilege and centralized secret governance.
Why the other options are incorrect
A: Youd have to manage/rotate a client secretexactly what Fabrikam wants to avoid.
C: App Settings increase exposure and lack centralized secret lifecycle/auditing.
D: Over-privileged; bypasses Key Vault and requires managing Storage keys.

---

### Question 40

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
Fabrikam wants to ensure only users in the EarlyAdopters group can join devices to Microsoft Entra and that MFA is required at the time of device registration/join (mobile phone verification acceptable).
Which TWO configurations should you implement?

**Options:**

- **A.** A. In Microsoft Entra ID > Devices, set Users may join devices to Azure AD = Selected and select the EarlyAdopters group ✅
- **B.** B. Create a Conditional Access policy with User actions: Register or join devices and Grant: Require multifactor authentication for EarlyAdopters ✅
- **C.** C. Enable Security defaults and add EarlyAdopters to an exclusion list
- **D.** D. Assign the Device Enrollment Manager role to the EarlyAdopters group
- **E.** E. Turn on per-user MFA for EarlyAdopters and disable Conditional Access
- **F.** F. Create an Azure Policy to deny device join for all users except EarlyAdopters

**Correct answer:** A, B

**Explanation:**

Choice A and B are correct.
Setting Users may join devices to Azure AD = Selected and choosing EarlyAdopters enforces that only that group can perform device join/registration. Then, a Conditional Access policy targeting User actions: Register or join devices and requiring MFA forces a second factor at the exact moment of the join operation. This pair directly satisfies both requirementsscoping who can join and requiring MFA (e.g., phone-based methods) during device registrationwithout adding unnecessary infrastructure.
Why the others are incorrect
C: Security defaults apply broad settings and dont precisely scope device join to a specific group; you lose fine-grained control compared to device settings + CA.
D: Device Enrollment Manager is an Intune role for bulk enrollment scenarios, not for controlling Entra device join permissions or MFA at join.
E: Per-user MFA is legacy and coarse; it doesnt specifically bind MFA to the device registration/join action like Conditional Access does.
F: Azure Policy does not control Microsoft Entra device join behavior; use Entra device settings and Conditional Access instead.

---

### Question 41

You have Azure subscription that includes virtual network with following subnets:
Subnet1, which has connected virtual machine
Subnet2, which has connected app service web app
Subnet3, which has deployed container instance
You plan to deploy container instance named container1.
To which subnets can you deploy container1?

**Options:**

- **A.** A. Subnet1 and Subnet3 only
- **B.** B. Subnet1, Subnet2 and Subnet3
- **C.** C. Subnet2 and Subnet3 only
- **D.** D. Subnet3 only ✅

**Correct answer:** D

**Explanation:**

Azure Container Instances must be deployed into a subnet that is explicitly delegated to Azure Container Instances, and Microsoft states that a subnet used for container groups can contain only container groups. Microsoft also says that once you deploy one container group to a delegated subnet, you can deploy more container groups to that same subnet. That makes Subnet3 valid, because it already contains a container instance and is therefore the subnet type intended for additional Azure Container Instances.
Subnet1 is not valid because it already has a virtual machine connected to it, and an Azure Container Instances delegated subnet can contain only container groups. Subnet2 is also not valid because App Service virtual network integration uses a dedicated subnet and requires an unused subnet for that integration scenario, so it is not a subnet you can also use for Azure Container Instances.
Why the other options are incorrect:
 A. Subnet1 and Subnet3 only  Subnet3 is correct, but Subnet1 is not. A subnet for Azure Container Instances can contain only container groups, so a subnet already used by a virtual machine does not meet that requirement.
 B. Subnet1, Subnet2 and Subnet3  This overstates what is allowed. Subnet1 is blocked by the container groups only rule for Azure Container Instances, and Subnet2 is an App Service integration subnet, which Microsoft describes as dedicated and unused for that purpose.
 C. Subnet2 and Subnet3 only  Subnet3 is valid, but Subnet2 is not. App Service VNet integration requires a dedicated subnet, and Azure Container Instances also require their own delegated subnet used only for container groups, so the same subnet cannot satisfy both conditions here.

---

### Question 42

You plan to deploy an Azure NAT Gateway for outbound connectivity. You must attach one or more existing public IP addresses to the NAT gateway without creating additional resources.
Which option lists all and only the public IPs you can attach?

**Options:**

- **A.** A. IP1 only ✅
- **B.** B. IP1 and IP2 only
- **C.** C. IP1, IP3, and IP4
- **D.** D. IP1 and IP5 only
- **E.** E. IP2 only

**Correct answer:** A

**Explanation:**

NAT Gateway requires public IPs that are Standard SKU, Regional tier, Static, and IPv4. From the table, only IP1 meets all requirements.
Why the others are incorrect
B. IP1 and IP2 only  IP2 is Global tier; NAT Gateway requires Regional.
C. IP1, IP3, and IP4  IP3/IP4 are Basic SKU (NAT Gateway needs Standard).
D. IP1 and IP5 only  IP5 is IPv6 Basic Dynamic (NAT Gateway attachment requires Standard IPv4 Static).
E. IP2 only  Global tier is not supported for NAT Gateway attachment.

---

### Question 43

You are creating a public frontend for an Azure Standard Load Balancer. You must select from existing public IPs and cannot create new resources.
Which option lists all and only the public IPs you can use for the Load Balancer frontend?

**Options:**

- **A.** A. IP1 only ✅
- **B.** B. IP1 and IP2 only
- **C.** C. IP1 and IP4 only
- **D.** D. IP2 only
- **E.** E. IP1, IP2, and IP5

**Correct answer:** A

**Explanation:**

A Standard Load Balancer frontend requires a Standard SKU, Regional, Static, Public IPv4 (or Standard IPv6) address. From the table, IP1 is Standard/Regional/Static/IPv4.
IP2 fails because its Global tier (cannot be associated to regional resources).
IP5 fails because its Basic and Dynamic (and even though IPv6 can be supported by Standard LB, this one is not Standard/Static).
Why the others are incorrect
B. IP1 and IP2 only  IP2 is Global tier; Load Balancer requires Regional association.
C. IP1 and IP4 only  IP4 is Basic SKU (Standard LB frontend requires Standard).
D. IP2 only  Global tier public IPs cant be used as a frontend for a regional Standard Load Balancer.
E. IP1, IP2, and IP5  IP2 (Global) and IP5 (Basic/Dynamic/IPv6) dont meet Standard LB frontend

---

### Question 44

You have an Azure subscription.
You plan to create an Azure Container Registry named ContReg1.
You need to ensure that you can push and pull signed container images for ContReg1.
What should you do for ContReg1?

**Options:**

- **A.** A. Upgrade ContReg1 to the Premium SKU and enable geo-replication.
- **B.** B. Enable the admin user on ContReg1 and use its username/password when pushing images.
- **C.** C. Enable content trust on ContReg1. ✅
- **D.** D. Configure a private endpoint and disable public network access.
- **E.** E. Enable anonymous pull on ContReg1.

**Correct answer:** C

**Explanation:**

To use signed images with Azure Container Registry, the registry must have content trust enabled. Content trust enforces that images pushed to and pulled from the registry are digitally signed (e.g., via Docker Content Trust/Notary-style signing). Enabling content trust is the registry-side requirement; youll also sign images from the client side when pushing. Without enabling content trust on the registry, signed image enforcement wont apply.
Why the others are incorrect
A. Premium + geo-replication  Premium features improve scale and multi-region availability but are unrelated to image signing.
B. Enable the admin user  Admin credentials control authentication, not signing. This doesnt enforce or enable signed images.
D. Private endpoint + disable public access  This hardens network access, not content signing. You can still push unsigned images over a private link.
E. Enable anonymous pull  Anonymous access reduces access control and does nothing to enforce or enable signed images.

---

### Question 45

You created an Azure Storage account and will add 10 blob containers. For one container, data at rest must use a different encryption key than the rest.
What should you do before creating that container?

**Options:**

- **A.** A. Enable customer-managed keys at the storage account level
- **B.** B. Create an encryption scope using a Key Vault CMK and use that scope for the container ✅
- **C.** C. Enable infrastructure encryption (double encryption) on the account
- **D.** D. Rotate the storage account access keys

**Correct answer:** B

**Explanation:**

Azure Blob Storage supports encryption scopes, which let you apply different encryption keys at a finer granularity than the storage account. To make one container use a different key, you first create an encryption scope in the storage account that references a customer-managed key (CMK) in Azure Key Vault or Managed HSM. When you create the container, you set that encryption scope as the containers default. Other containers can continue using the accounts default encryption (either Microsoft-managed keys or a separate CMK), so you achieve per-container key separation without new accounts.
Why the other options are incorrect:
A. Enabling CMK at the storage account level sets a single key for the entire account; it does not provide per-container key isolation.
C. Infrastructure encryption adds a second layer of platform-managed encryption (double encryption) but does not allow selecting a different key per container.
D. Rotating storage account access keys affects authentication/authorization to the account; it has no effect on which encryption key protects data at rest.

---

### Question 46

You have an Azure subscription that contains the virtual machines described below:
VM1 and VM2 use public IP addresses. From Windows Server 2019 on VM1 and VM2, you allow inbound Remote Desktop connections.
Subnet1 and Subnet2 are in a virtual network named VNET1.
The subscription contains two network security groups (NSGs) named NSG1 and NSG2. NSG1 uses only the default rules. NSG2 uses the default rules and the following custom incoming rule:
Priority: 100
Name: Rule1
Port: 3389
Protocol: TCP
Source: Any
Destination: Any
Action: Allow
NSG1 is associated to Subnet1. NSG2 is associated to the network interface of VM2.
For the following statement, select Yes if the statement is true. Otherwise, select No.
From the internet, you can connect to VM1 by using Remote Desktop.

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

NSG1 is applied at the subnet where VM1 lives and contains only default rules. The default inbound rules are:
AllowVNetInBound (VNet-to-VNet traffic)
AllowAzureLoadBalancerInBound
DenyAllInBound (priority 65500)
Because there is no explicit Allow for TCP 3389 from the Internet, traffic to VM1s public IP on 3389 is matched by DenyAllInBound and blocked at the subnet NSG.
Windows firewall allowing RDP is necessary but not sufficientNSG evaluation happens first, and without an Allow at the subnet (NSG1) or NIC level, Internet RDP to VM1 is denied. (By contrast, VM2 has its NIC NSG (NSG2) explicitly allowing 3389, so it can be reached.)
Why Yes is incorrect
Public IP + OS-level RDP enablement do not override NSG defaults.
With only default rules, NSG1s DenyAllInBound blocks unsolicited Internet inbound traffic, including RDP 3389.

---

### Question 47

You have an Azure subscription that contains the storage account shown in the following exhibit.
Based on the information provided, select the answer choice that completes the following statement correctly.
The maximum number of additional stored access policies that you can create for container1 is ________.

**Options:**

- **A.** A. 5
- **B.** B. 0
- **C.** C. 1
- **D.** D. 3 ✅

**Correct answer:** D

**Explanation:**

3 is correct because a container can have at most 5 stored access policies. Container1 already has Policy1 and Policy2, so you can add 3 more to reach the limit.

---

### Question 48

Contoso plans to bulk-create 500 employee accounts using a CSV import in the Microsoft Entra admin center. HR insists that user UPNs use the verified domain contoso.com (for example, [email protected]).
Current state
Requirement
Ensure all new users are created with UPNs in the contoso.com domain during the first (and only) bulk import attempt. No follow-up mass edits are allowed.
Which single action guarantees the CSV import creates users with the desired UPNs?

**Options:**

- **A.** A. Change the tenants default domain to contoso.com before the import ✅
- **B.** B. Keep the default domain as contoso.onmicrosoft.com; the CSV UPN values will override it
- **C.** C. Add a second column with alternate email addresses using contoso.com
- **D.** D. Set each users mail nickname to contoso.com

**Correct answer:** A

**Explanation:**

During bulk creation, if the CSV explicitly specifies full UPNs, those values are used; however, in practice many bulk templates populate only name/alias and rely on the tenant default domain to form the UPN. To guarantee correct UPNs with no post-fix, set the tenant default domain to contoso.com before import. This ensures any UPN constructed from aliases uses contoso.com and avoids accidental @onmicrosoft UPNs if the CSV is incomplete or later regenerated.
Why the others are incorrect
B. Assumes every CSV row has a full UPN; the requirement says guarantee without follow-upsdefault domain change is the safe control.
C. Alternate email does not determine UPN.
D. Mail nickname forms the left side of addresses; it doesnt set the domain/suffix.

---

### Question 49

You must allow Helpdesk staff to administer password resets by assigning the Entra ID role Password Administrator to a group (not to individuals). Security requires that the group be eligible for role assignment and remain strictly controlled.
Which configuration produces a group that can be assigned a directory role?

**Options:**

- **A.** A. Create a Microsoft 365 group with dynamic user membership; assign the role to the group
- **B.** B. Create a Security group and enable Azure AD roles can be assigned to the group; use Assigned membership ✅
- **C.** C. Create a Security group with dynamic device membership; enable Azure AD roles can be assigned to the group
- **D.** D. Create a Distribution list in Exchange and enable role assignment

**Correct answer:** B

**Explanation:**

Directory roles (like Password Administrator) can only be assigned to role-assignable groups. These must be Security groups with Azure AD roles can be assigned to the group enabled (isAssignableToRole = true) and cannot be dynamic or Microsoft 365 groups. Assigned membership keeps ownership tight.
Why the others are incorrect
A. M365 groups cannot be role-assignable for directory roles; dynamic membership is also disallowed.
C. Dynamic groups cannot be marked role-assignable; device membership is irrelevant for user roles.
D. Exchange distribution lists arent Entra groups and cannot hold directory roles.

---

### Question 50

Tailwind Traders needs a group that automatically includes all full-time employees in the Sales department and excludes guest users. The HR system writes Sales into the Department attribute. You will use this group later for conditional access and license assignment.
Which membership rule meets the requirement?

**Options:**

- **A.** A. user.department -eq “Sales“
- **B.** B. (user.department -eq “Sales“) -and (user.userType -eq “Member“) ✅
- **C.** C. (user.department -eq “Sales“) -or (user.userType -eq “Member“)
- **D.** D. (user.physicalDeliveryOfficeName -eq “Sales“) -and (user.userType -eq “Guest“)

**Correct answer:** B

**Explanation:**

To include only Sales and exclude guests, you must filter on Department equals Sales and userType equals Member. This yields internal Sales employees only.
Why the others are incorrect
A. Includes Sales guests as well as members (no userType filter).
C. The OR condition brings in all Members from any department.
D. Uses the wrong attribute and includes Guests, which is the opposite of the requirement.

---

### Question 51

You will use group-based licensing to assign Microsoft 365 E3. Governance requires that eligible users are added automatically based on attributes, and that the group can be used for license assignment immediately after creation without extra conversions.
Which group configuration should you create?

**Options:**

- **A.** A. Microsoft 365 group with dynamic device membership
- **B.** B. Security group with dynamic user membership ✅
- **C.** C. Security group with dynamic device membership
- **D.** D. Microsoft 365 group with assigned membership

**Correct answer:** B

**Explanation:**

Group-based licensing supports Security groups (and M365 groups), but membership must concern users, not devices. Dynamic user membership automatically adds/removes users based on attributes and is valid for license assignment without converting the group type later.
Why the others are incorrect
A. Group type is M365, but membership is deviceslicenses apply to users.
C. Security group is fine, but device membership cannot receive user licenses.
D. M365 group with assigned membership works for licensing but does not meet the automation requirement (dynamic user membership was required).

---

### Question 52

Contoso wants the AppOps team to fully manage virtual machines in a resource group named RG-App (create, start/stop/redeploy, delete, attach/detach disks) but must not allow them to create or modify virtual networks, subnets, public IPs, or load balancers.
Current state
Which single built-in role should you assign to the AppOps group at the RG-App scope to meet the requirement?

**Options:**

- **A.** A. Contributor
- **B.** B. Virtual Machine Contributor ✅
- **C.** C. Network Contributor
- **D.** D. Owner

**Correct answer:** B

**Explanation:**

Virtual Machine Contributor lets members manage virtual machines (create, update, delete, power operations, extensions) without granting rights to networking resources such as VNets, subnets, and load balancers. This meets manage VMs, not networking. Contributor and Owner would allow networking changes; Network Contributor would not permit VM lifecycle operations.
Why the others are incorrect
A. Contributor also allows modifying networking and other resources in the RG.
C. Network Contributor manages networking objects but cannot create/update/delete VMs.
D. Owner includes full access plus role assignment; violates least privilege.

---

### Question 53

You have the following assignments.
Role assignments
Resource inventory
What is DevLeads effective access to rg-backend-web?

**Options:**

- **A.** A. Reader only (inherited from subscription)
- **B.** B. Key Vault Secrets User (from resource assignment)
- **C.** C. Reader + Key Vault Secrets User combined
- **D.** D. Contributor (from RG-Backend) ✅

**Correct answer:** D

**Explanation:**

Effective permissions are the union of role assignments across scopes, with the most permissive applicable role at or above the targets scope taking effect. For rg-backend-web (in RG-Backend), the DevLead has Contributor at the RG scope, which overrides the lesser Reader inherited from the subscription. The Key Vault Secrets User role applies only to rg-backend-kv, not to the App Service.
Why the others are incorrect
A. Reader at subscription is superseded by Contributor at the RG scope.
B. Key Vault Secrets User is scoped to the key vault resource only.
C. Combining unrelated roles here doesnt elevate access beyond Contributor at the RG.

---

### Question 54

Security wants Helpdesk to grant Reader access to developers at a specific resource group, but Helpdesk must not be able to change or delete resources in that RG. You will assign a single built-in role to the Helpdesk group at that RGs scope.
Which role should you assign?

**Options:**

- **A.** A. User Access Administrator ✅
- **B.** B. Reader
- **C.** C. Contributor
- **D.** D. Owner

**Correct answer:** A

**Explanation:**

User Access Administrator permits managing RBAC assignments (add/remove role assignments) without granting permissions to modify the underlying resources. This allows Helpdesk to assign Reader to others while keeping their own ability to change resources minimal.
Why the others are incorrect
B. Reader can view but cannot grant roles.
C. Contributor can modify resources; exceeds the requirement.
D. Owner can modify resources and assign roles; exceeds least privilege.

---

### Question 55

Developers need to read blob contents from a storage account named stsappdata without using account keys or SAS. They must not be able to modify any resources in the resource group. You will assign a single built-in role on the storage account.
Which role meets the requirement?

**Options:**

- **A.** A. Storage Blob Data Reader ✅
- **B.** B. Reader
- **C.** C. Storage Blob Data Contributor
- **D.** D. Contributor

**Correct answer:** A

**Explanation:**

Storage Blob Data Reader grants data-plane read access to blob contents via Azure AD (OAuth) without control-plane rights. Reader and Contributor are management-plane roles and do not grant data-plane blob read; Storage Blob Data Contributor allows write, which is more than required.
Why the others are incorrect
B. Reader allows viewing the storage accounts control-plane metadata only, not blob data.
C. Storage Blob Data Contributor permits write/delete to blobs; exceeds requirement.
D. Contributor grants control-plane modifications on the storage account; not needed and still doesnt confer data-plane read by itself.

---

### Question 56

Your org applies Azure Policy at multiple scopes. Youre troubleshooting why a VM deployment in RG-App failed with a location error.
Assignments
Attempted deployment
 vm-02 in RG-App with location East US 2
What explains the deny on vm-02?

**Options:**

- **A.** A. The RG-App Audit policy takes priority and audits but does not deny
- **B.** B. The resource exemption on vm-01 cascades to vm-02 and blocks it
- **C.** C. The subscription-scope Deny for Allowed locations with param [East US 2] is overridden by the MG-scope Deny, so only East US is allowed ✅

**Correct answer:** C

**Explanation:**

When identical Allowed locations policies are assigned at multiple scopes with different parameters, the most restrictive effect at the nearest applicable scope applies, and higher-scope Deny is not overridden by lower-scope assignments. Here, the MG-scope Deny allows only East US. The subscription Deny allows East US 2, but policy evaluation is intersection, not unionvm-02 in East US 2 violates the MG policy and is denied. The RG policy is Audit (doesnt deny). The exemption is for vm-01 only.
Why the others are incorrect
A. RG Audit doesnt cause deny; higher-scope MG Deny still blocks.
B. Exemptions are resource-scoped; vm-02 isnt exempt.

---

### Question 57

Contosos governance board says you have to ensure every new and existing resource group has the tag CostCenter. If its missing, it must be added automatically with value Unassigned. Remediation for existing RGs is required.
Which policy effect should you use?

**Options:**

- **A.** A. Append
- **B.** B. Modify ✅
- **C.** C. AuditIfNotExists
- **D.** D. Deny

**Correct answer:** B

**Explanation:**

The Modify effect can change the incoming request and also correct existing noncompliant resources via remediation tasks. You attach a managed identity (preferably user-assigned) to the policy/initiative assignment, grant it the minimal RBAC (e.g., Resource Group Contributor at the target scope), and then run remediation to stamp the CostCenter=Unassigned tag on existing RGs. For new requests, Modify amends the resource to include the tag before its written, achieving both enforcement and auto-fix.
Why the others are incorrect:
Append: Adds fields to the request context but doesnt mutate existing resources; not ideal for retrofitting tags at scale.
AuditIfNotExists: Flags drift but wont add the tag.
Deny: Blocks creation/updates without fixing; violates the auto-add requirement.

---

### Question 58

You have an Azure Storage account named storage1.
You create the following encryption scopes for storage1:
Scope1 that has an encryption type of Microsoft-managed keys
Scope2 that has an encryption type of Customer-managed keys
Which storage services can be used with Scope2?

**Options:**

- **A.** A. blob and file only
- **B.** B. blob, file, table, and queue
- **C.** C. blob only ✅
- **D.** D. file only
- **E.** E. table and queue only

**Correct answer:** C

**Explanation:**

Encryption scopes in Azure Storage are a Blob storage feature. Microsofts current documentation is titled Encryption scopes for Blob storage and says encryption scopes let you manage encryption with a key scoped to a container or an individual blob. It also states that when an encryption scope is applied, it applies to blobs in that container or to an individual blob.
The fact that Scope2 uses a customer-managed key does not expand encryption scopes to other storage services. Microsoft says an encryption scope can be protected with either a Microsoft-managed key or a customer-managed key, but the scope itself still applies to Blob storage. Azure Files, Table storage, and Queue storage can use customer-managed keys at the storage account encryption level, but that is a different feature from encryption scopes.
Why the other options are incorrect:
 A. blob and file only  Azure Files can use customer-managed keys at the account level, but Microsofts encryption scope documentation limits encryption scopes to Blob storage containers and blobs. So this mixes two different features.
 B. blob, file, table, and queue  All four services can use a customer-managed key when the storage account is configured appropriately, but that is account-level encryption, not encryption scopes. Microsofts encryption scope feature is still specifically for Blob storage.
 D. file only  This is incorrect because encryption scopes are not a Files feature. Microsoft describes them as being scoped to a blob container or an individual blob.
 E. table and queue only  Table and Queue can be configured to use customer-managed keys through account-scoped encryption settings, but not through encryption scopes. Encryption scopes remain a Blob storage feature.

---

### Question 59

At Fabrikam, you have to deploy a VM into RG-App. The deployment fails with a location error.
Policy assignments
You tried to create vm1 in East US 2 within RG-App. Why was it denied?

**Options:**

- **A.** A. The RG Audit blocks East US 2 because it differs from MG parameters
- **B.** B. The MG Deny is ignored if a lower-scope assignment exists
- **C.** C. The two policies are combined as a union, so both locations are allowed
- **D.** D. The MG Deny allows only East US and takes precedence over the RG Audit ✅

**Correct answer:** D

**Explanation:**

Policy evaluation honors higher scope restrictions. A Deny at the management group scope that allows only East US applies to all descendant scopes. The RG-level Audit does not override a higher-scope Deny (Audit merely records noncompliance). Because the attempted location is East US 2, it violates the MG Deny and is blocked, regardless of the RG assignment.
Why the others are incorrect:
A: Audit never blocks; it only logs.
B: Higher-scope Deny is not ignored by lower scopes.
C: Allowed locations is effectively an intersection, not a union; adding East US 2 at RG does not open it up if the MG only allows East US.

---

### Question 60

At Contoso, you assigned a built-in policy that DeployIfNotExists diagnostic settings on storage accounts at the subscription scope. Compliance shows many accounts as noncompliant. Security requires least privilege when you remediate.
What should you configure before running the remediation task?

**Options:**

- **A.** A. Attach a user-assigned managed identity to the policy (or initiative) assignment and grant it only the minimal RBAC on the target scope ✅
- **B.** B. Grant Owner to your user at subscription, then re-run policy evaluation
- **C.** C. Enable system-assigned managed identity on every storage account
- **D.** D. Change the effect to Audit and use Azure Monitor alerts

**Correct answer:** A

**Explanation:**

DeployIfNotExists remediation runs using the managed identity on the policy/initiative assignment, not your user identity. Best practice is to attach a user-assigned managed identity (UAMI) to the assignment, grant it the minimal roles needed to deploy the diagnostic settings (for example, Storage Account Contributor or specific granular roles at the RG/resources), and then start a remediation task that uses this identity. This achieves least privilege and scales cleanly.
Why the others are incorrect:
B: Your users Owner role is unnecessary and violates least privilege; remediation wont run as your user anyway.
C: System-assigned MIs on each storage account are irrelevant; the identity lives on the assignment, not on targets.
D: Switching to Audit avoids deployment, leaving the noncompliance unfixed.

---
