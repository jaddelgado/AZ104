# Practice Set 21

Source: [https://skillcertpro.com/az-104-exam-questions/21/](https://skillcertpro.com/az-104-exam-questions/21/)
Total questions: 45

---

### Question 1

You are building a two-tier hierarchy: mg-prod and mg-devtest under the root management group. prod subscriptions must enforce Allowed locations (AU East/SE) and Deny public IP on compute. devtest must allow evaluation first (Audit), not block.
Requirements
prod: Deny policies, apply to all current/future prod subscriptions
devtest: Audit policies only
Single place to manage baseline
Which approach fits?

**Options:**

- **A.** A. Assign a hardening initiative (Allowed locations, Deny public IP) at mg-prod with Deny effects; move prod subscriptions under mg-prod. Assign the same initiative with Audit effects at mg-devtest. ✅
- **B.** B. Assign all policies per subscription; avoid management groups.
- **C.** C. Assign policies only at resource group level in each subscription.
- **D.** D. Use RBAC deny assignments at mg-prod instead of Policy.

**Correct answer:** A

**Explanation:**

Choice A is correct. Management groups are designed for inheritance: assigning the hardening initiative at mg-prod ensures every current and future prod subscription receives Deny guardrails automatically. Using a parallel assignment with Audit at mg-devtest allows evaluation without blocking. Moving prod subscriptions under mg-prod aligns scope boundaries with organizational intent and reduces configuration drift.
Why the others are incorrect
B: Per-subscription assignment doesnt scale and fails to auto-apply to future subscriptions.
C: RG-level assignments fragment governance and are easy to miss; they dont guarantee consistent baselines.
D: RBAC deny assignments do not implement configuration compliance; Azure Policy is the correct control.

---

### Question 2

Scenario
A Linux VM was corrupted by a bad deploy. You only need to recover /etc/app/config.yml quickly with no VM downtime. The VM is protected by a Recovery Services vault with recent restore points. After recovery, youll roll forward normally.
Which TWO actions meet the goal?

**Options:**

- **A.** A. Restore VM (Create new) and copy the file from the new VM
- **B.** B. File Recovery: start from the chosen restore point, download the mount script, mount the recovery volumes on the running VM, copy the file ✅
- **C.** C. Replace existing disks from a restore point
- **D.** D. Take a crash-consistent snapshot using Azure Compute and attach it
- **E.** E. Run File Recovery from Backup Center on a Blob container
- **F.** F. After copying, unmount the recovery volumes and stop the File Recovery session ✅

**Correct answer:** B, F

**Explanation:**

For single-file restore without downtime, use File Recovery from the Recovery Services vault. You select a restore point and the portal generates a script (Linux: shell; Windows: PowerShell) that securely mounts read-only recovery volumes over iSCSI to the running VM. You then copy /etc/app/config.yml back to its location. When done, you unmount and end the File Recovery session, which removes the temporary exposure and cleans up. This flow avoids creating/replacing VMs or disks and meets the fast, minimal impact requirement.‘
Why the other options are incorrect
A: Works but is heavy, slow, and costlyspins up a full VM just to fetch one file.
C: Replacing disks causes downtime and is unnecessary for a single file.
D: Ad-hoc snapshots arent part of the Azure Backup workflow and dont help with past restore points.
E: File Recovery from VM backup is run against VM restore points, not Blob containers; Blob Backup is a different workload.

---

### Question 3

Scenario
Contoso is building a new public web tier in Australia East that must remain available during a complete zone outage. They want native Azure primitives only, with health-based load distribution, elastic autoscale, and an upgrade policy that rolls through instances without taking the entire tier down. Instances use managed disks; no third-party clustering.
Requirements
Spread across multiple availability zones
Health-probed layer-4 load balancing
Autoscale and safe rolling OS upgrades
Which deployment meets the requirements?

**Options:**

- **A.** A. One VM in an availability set; Basic Load Balancer; manual scale
- **B.** B. Three VMs in one availability set; Standard Load Balancer; autoscale rules
- **C.** C. VMSS (Flexible) pinned to Zone 1; Standard Load Balancer; manual scale
- **D.** D. VMSS across Zones 13; Standard Load Balancer; autoscale with rolling upgrades ✅

**Correct answer:** D

**Explanation:**

A Virtual Machine Scale Set (VMSS) deployed across Zones 13 delivers zonal fault isolation and qualifies for the multi-instance SLA. A Standard Load Balancer provides health probes and L4 distribution to a VMSS backend pool, enabling traffic to flow only to healthy instances, including when one whole zone fails. VMSS integrates natively with Autoscale (CPU/requests/metric-based) and supports rolling upgrade policies (batch %, health checks, pause) so the platform can patch or roll new images without total tier downtime. This blueprint matches the resiliency, elasticity, and upgrade safety constraints using only first-party features.
Why the other options are incorrect
A: A single VM cannot achieve zonal resiliency or a multi-instance SLA; Basic LB lacks advanced health-probe/load behavior expected for production.
B: Availability sets mitigate rack/datacenter faults but not zonal outages; all VMs live within one zone.
C: Pinning a scale set to one zone removes zonal resilience; manual scale misses the elastic requirement.

---

### Question 4

Scenario
Your production plan hosts a CPU-bound API. Target behavior: maintain at least 2 instances at all times; scale out rapidly when CPU &gt; 70%; scale in conservatively when CPU &lt; 40%; and pre-warm to 6 instances on weekdays 08:0018:00 AEST.
Select TWO actions to implement.

**Options:**

- **A.** A. Enable Always On; set min instances = 0; rely on manual scale
- **B.** B. Create an Autoscale setting with metric rules: scale out +1 at CPU > 70% (cooldown 10m); scale in ?1 at CPU < 40% (cooldown 15m ✅
- **C.** C. Use Deployment Slots traffic % to auto-scale production
- **D.** D. Configure a Scheduled profile in the same Autoscale setting: weekdays 08:0018:00 AEST, default instance count = 6
- **E.** E. Set plan maximum instance count = 20; leave min = 2 for off-hours ✅
- **F.** F. Set Always On = Off to allow cold start and save cost

**Correct answer:** B, E

**Explanation:**

Autoscale is delivered by Azure Monitor Autoscale for App Service plans. You define metric rules (e.g., CPU thresholds with separate cooldowns) and a capacity envelope (min/default/max). Setting max = 20 and leaving min = 2 ensures resiliency off-hours while permitting burst scale-out. Metric-driven rules handle dynamic load; you can additionally add a scheduled profile to pre-warm, but the two must-have steps to fulfill CPU triggers and guardrails are the autoscale rules plus capacity bounds.
Why the other options are incorrect
A: Min=0 conflicts with at least 2 instances; manual scaling defeats the autoscale requirement.
C: Deployment Slot traffic routing is for release management, not autoscale.
D: Useful for pre-warm, but without metric rules and capacity you wont meet the CPU-based behavior alone.
F: Disabling Always On increases cold starts; it doesnt implement scale goals.

---

### Question 5

Scenario
You are reviewing a Bicep file for a new storage account. The template should deploy a StorageV2 account with LRS, HTTPS-only, public blob access disabled, tags for Environment and CostCenter, and a location that follows the resource group by default. The team will bind private endpoints separately.
param location string = resourceGroup().location
param skuName string = ‘Standard_LRS‘
resource stg ‘Microsoft.Storage/storageAccounts@2023-01-01‘ = {
  name: ‘stgprod001‘
  location: location
  sku: { name: skuName }
  kind: ‘StorageV2‘
  tags: {
    Environment: ‘Prod‘
    CostCenter: ‘FIN-001‘
  }
  properties: {
    supportsHttpsTrafficOnly: true
    allowBlobPublicAccess: false
    accessTier: ‘Hot‘
  }
}
Which statement best describes the deployment?

**Options:**

- **A.** A. Deploys BlobStorage with GRS; public access enabled; location fixed to East US
- **B.** B. Deploys StorageV2 with ZRS; HTTPS optional; tags ignored unless set at subscription
- **C.** C. Deploys StorageV2 with LRS; HTTPS-only; public access disabled; tags applied; location defaults to the resource group ✅
- **D.** D. Deploys StorageV2 with GRS; requires private endpoint in the same template for HTTPS-only

**Correct answer:** C

**Explanation:**

The Bicep sets kind: ‘StorageV2‘ and sku.name: ‘Standard_LRS‘, so its a StorageV2 account with LRS. supportsHttpsTrafficOnly: true enforces HTTPS-only; allowBlobPublicAccess: false disables anonymous public blob access. The tags object defines Environment and CostCenter, which ARM will apply to the resource. The location parameter defaults to resourceGroup().location, so the deployment follows the RG location unless overridden. A private endpoint is optional and not required to enforce HTTPS-only.
Why the other options are incorrect
A: Wrong kind (says BlobStorage), wrong redundancy (GRS), and claims public access enabled and fixed locationnone of which match the template.
B: Wrong redundancy (ZRS) and HTTPS claim; ARM applies tags directly from the templateno subscription tag prerequisite.
D: Wrong redundancy (GRS) and incorrect implication that HTTPS-only requires a private endpoint in the same template.

---

### Question 6

Scenario
You run two workloads:
1. A queue-driven worker that should scale from 0 to 50 based on backlog.
2. Bursty batch jobs that spin up dozens of short-lived containers in a VNet with no orchestrator.
Keep idle cost near zero, avoid unnecessary complexity, and use native features where they fit.
Select TWO actions that together meet the goals.

**Options:**

- **A.** A. ACI: Configure built-in autoscale to 050 replicas on queue length
- **B.** B. ACA: Set minReplicas=0, maxReplicas=50; add a KEDA queue trigger to autoscale by backlog ✅
- **C.** C. ACA: Force minReplicas=2 and disable KEDA for stability
- **D.** D. ACI: Launch N container groups per burst via script/Functions/Logic Apps; set CPU/memory per group; use restartPolicy OnFailure for job containers ✅
- **E.** E. ACI: Migrate to AKS with Virtual Kubelet to unlock ACI autoscaling
- **F.** F. ACA: For HTTP endpoints, configure ingress and target concurrent requests to scale on traffic

**Correct answer:** B, D

**Explanation:**

For event-driven microservices, Azure Container Apps (ACA) integrates KEDA to autoscale on external metrics like queue depth. Setting minReplicas=0 achieves true scale-to-zero (no cost when idle) and maxReplicas=50 caps burst parallelism, exactly matching requirement (1). For ad-hoc batch jobs that dont justify a full orchestrator, Azure Container Instances (ACI) is intentionally simple: there is no native autoscaler, so you script or event-drive the launch of multiple container groups per burst. You can size each group (CPU/memory) and use restartPolicy OnFailure so containers exit cleanly when the job completesmeeting requirement (2) with minimal machinery and private networking where needed.
Why the other options are incorrect
A: ACI has no built-in autoscale; queue-based scale requires external orchestration (Functions, Logic Apps, pipelines).
C: minReplicas=2 blocks scale-to-zero and increases idle cost; disabling KEDA removes autoscale.
E: AKS + Virtual Kubelet is a larger architectural shift and unnecessary to satisfy todays goals.
F: HTTP concurrency-based scaling is great for web traffic, but the driver here is queue backlog, not HTTP.

---

### Question 7

Scenario
A web tier must achieve high availability for a customer-facing app in Australia East. The platform team demands resiliency to both a datacenter fault and a zonal outage. The solution should use native Azure constructs (no third-party clustering), keep state on managed disks, and balance traffic across instances.
Requirements
Survive zonal outage in the region
Balance traffic across instances
Use native Azure components
Which deployment meets the requirements?

**Options:**

- **A.** A. Single VM in an availability set with Premium SSD
- **B.** B. Three VMs distributed across Zones 1, 2, and 3 behind a Standard Load Balancer ✅
- **C.** C. Three VMs in one availability set (2 update domains, 5 fault domains) behind a Basic Load Balancer
- **D.** D. One VM Scale Set (Uniform) pinned to Zone 1 with a Standard Load Balancer

**Correct answer:** B

**Explanation:**

Spreading independent VMs across multiple availability zones provides fault isolation at the zone boundary and qualifies for the higher multi-instance SLA. A Standard Load Balancer distributes traffic and gives zone-redundant front-end/back-end paths. This design handles single-datacenter hardware faults (implicitly within a zone) and entire zone failures, while keeping the architecture simple and native.
Why the other options are incorrect
A: A single VM (even in an availability set) cannot meet zonal resiliency or multi-instance SLAs.
C: Availability sets protect against rack/datacenter failures, not zonal outages; Basic LB is not recommended for production HA.
D: A scale set pinned to one zone loses resiliency if that zone fails.

---

### Question 8

Scenario
You run a Linux App Service (Production) in Australia East. You need zero-downtime releases with warm-up before traffic switch, and some settings (DB connection strings, instrumentation keys) must stay with the slot during swaps. Releases must be validated with health checks before completing the swap. The plan tier supports slots.
Requirements
Warm up in staging before cutover
Slot-sticky settings for secrets/connection strings
Health-checked swap (no cold start in production)
Which approach meets the requirements?

**Options:**

- **A.** A.Create slot stagingEnable Auto SwapLeave settings non-sticky; swap immediately
- **B.** B.Create slot stagingMark app settings/connection strings as Slot settingsConfigure Health Check; perform Swap with preview, validate, then complete swap ✅
- **C.** C.Use traffic routing 50/50 in one slotDisable Health CheckSwap when errors drop
- **D.** D.Stop productionStart stagingSwap to production

**Correct answer:** B

**Explanation:**

Swap with preview warms the staging slot with production config and routes internal pings until healthy, then completes the swapgiving zero-downtime cutover. Declaring slot settings for app settings/connection strings keeps those values bound to the slot (they dont follow the app during swap), which is required for secrets and environment-specific endpoints. Health Check ensures instances are ready before you finalize, preventing cold-start impact on production.
Why the other options are incorrect
A: Auto Swap without slot-sticky settings risks leaking/stomping secrets and swaps before explicit health validation.
C: 50/50 routing doesnt guarantee warm, isolated validation; disabling Health Check defeats the safety gate.
D: Stopping production introduces downtime and doesnt provide a staged warm-up path.

---

### Question 9

Scenario
A VM in SpokeA cannot reach an Azure SQL private endpoint in the Hub. DNS is supposed to resolve the SQL FQDN to a private IP in the hub. You need a fast, systematic diagnosis using Azure-native tools to confirm DNS resolution, routing, and NSG behavior before escalating.
Which troubleshooting sequence is best?

**Options:**

- **A.** A.Start a packet capture on the SQL private endpointEnable verbose NSG logs on the SQL NICReboot the VM
- **B.** B.Use IP flow verify on the VMs NIC for the SQL FQDNIf allowed, stop thereOtherwise, open all NSG rules
- **C.** C.Run Connection troubleshoot from the VMs NIC to the SQL FQDN (validates reachability and DNS)Check Next hop on the VMs NIC for the SQL private IP (verifies effective routing/UDR)If still failing, run IP flow verify on that 5-tuple (shows the exact allow/deny rule) ✅
- **D.** D.Run traceroute to the SQL public IPDisable private DNS zonesSwitch SQL to public endpoint

**Correct answer:** C

**Explanation:**

Start with Connection troubleshoot (Network Watcher) targeting the FQDNit resolves DNS and tests reachability, quickly exposing name resolution or path issues. Then check Next hop for the resolved private IP to confirm the VMs effective route to the private endpoint (e.g., via peering, route tables, or accidental Internet routes). If traffic is still blocked, run IP flow verify on that exact 5-tuple to see whether an NSG (on NIC or subnet) is denying and which rule is responsible. This trio gives end-to-end visibility: DNS ? route ? security, with minimal intrusion.
Why the other options are incorrect
A: You cant capture at a private endpoint like a NIC; PE is a service-managed resource. NSG logs on PE dont exist; rebooting the VM is not diagnostic.
B: IP flow verify alone doesnt validate DNS or routing; opening NSGs blindly is risky and non-deterministic.
D: Traceroute to a public IP and disabling private DNS contradict a private endpoint design; switching to public endpoint sidesteps the requirement.

---

### Question 10

Scenario
A three-tier app runs in one VNet. You must allow: Web ? App (TCP 443) and App ? DB (TCP 1433). All other east-west flows must be denied. IP addresses change frequently as VMs scale. Use Application Security Groups (ASGs) to avoid IP maintenance. Enforce at the subnet to cover any NIC added later.
Select TWO actions that together meet the goal.

**Options:**

- **A.** A. Create NSG rules with source/destination IP prefixes for each VM; apply NSG to each NIC
- **B.** B. Create ASGs: asg-web, asg-app, asg-db; add VM NICs to the matching ASG ✅
- **C.** C. In an NSG at the subnets, add rule: source asg-web ? dest asg-app, TCP 443 Allow
- **D.** D. In the same NSG, add rule: source asg-app ? dest asg-db, TCP 1433 Allow ✅
- **E.** E. Add a lower-priority Deny Any Any inbound rule on the subnets to block residual east-west
- **F.** F. Replace ASGs with service tags to represent the tiers

**Correct answer:** B, D

**Explanation:**

You first model the tiers with ASGs (B) and attach each NIC to its tier ASG so membership follows the VM, not its IP. Then you author NSG rules that reference ASGs rather than IPs. The decisive rule that enforces app-to-db communication is asg-app ? asg-db on TCP 1433 Allow (D). Youd pair it with asg-web ? asg-app on 443 Allow (C) and finish with a catch-all Deny (often via default rules or an explicit deny) to block everything else. Using subnet-level NSGs ensures future NICs in those subnets inherit the policy automatically.
Why the other options are incorrect
A: Hard-coding IPs defeats the purpose of ASGs and breaks when scale/addresses change; per-NIC NSGs increase drift.
C: This allows web?app only; it doesnt authorize app?db, hence insufficient alone (its needed in combination).
E: A deny is good hygiene, but without the ASG-based allows it would just block traffic; its not sufficient by itself.
F: Service tags represent Microsoft service ranges, not your tiers; they cant substitute for ASGs in east-west policy.

---

### Question 11

Scenario
Youre onboarding a raw-data landing container for analytics in Australia East. The platform team mandates no anonymous public access, RBAC for data access, and private endpoint access from one subnet. Security requires customer-managed key (CMK) separation using an encryption scope at the container level. Data engineers also need protection against accidental overwrites and deletes.
Requirements
Disable public blob access at the account; enforce TLS 1.2+; use a private endpoint
Create container raw bound to a CMK encryption scope
Enable blob versioning and blob soft delete
Which approach meets the requirements?

**Options:**

- **A.** A.Set container public access = ContainerUse account keys from app codeLeave encryption at default
- **B.** B.Disable public access at the account; enforce TLS 1.2Create encryption scope (CMK) and bind container raw to itUse private endpoint + RBAC; enable blob versioning and blob soft delete ✅
- **C.** C.Enable ADLS Gen2 with NFS v3Apply POSIX ACLs on containerKeep public access enabled
- **D.** D.Assign Owner to app MSIKeep default (service-managed) encryptionUse service endpoints (no private endpoint)

**Correct answer:** B

**Explanation:**

The secure landing pattern requires identity-based access over a private path, container-level cryptographic segregation, and in-place protection from accidental writes/deletes. Disabling public access at the account closes anonymous endpoints globally. A CMK-backed encryption scope bound to the raw container provides per-container key isolation and clean rotation/audit boundaries. A private endpoint restricts traffic to the VNet, while RBAC replaces shared secrets in code. Blob versioning preserves prior versions to undo overwrites, and blob soft delete retains deletions for the configured window. Together these controls satisfy the platform/network/security requirements and data-protection needs.
Why the other options are incorrect
A: Making the container public and using account keys violates the no-anonymous requirement and bypasses RBAC. Default encryption doesnt give per-container CMK separation.
C: ADLS Gen2/NFS v3 with POSIX ACLs doesnt address the no public access mandate here; leaving public access enabled breaks the core control. It also omits the required CMK encryption scope binding.
D: Granting Owner to the app is over-privileged, default encryption lacks CMK separation, and service endpoints do not provide the same isolation guarantees as a private endpoint.

---

### Question 12

Scenario
You need a chart of 95th percentile request duration by operation name in 1-minute bins over the last 15 minutes for /v2/ API calls in Application Insights.
Which single KQL query fits?

**Options:**

- **A.** A. Perf | where TimeGenerated > ago(15m) | summarize avg(CounterValue) by Computer
- **B.** B. requests | where timestamp > ago(15m) | summarize avg(duration) by operation_Name
- **C.** C. requests | where timestamp > ago(15m) and url has “/v2/“ | summarize p95=percentile(duration, 95) by bin(timestamp, 1m), operation_Name ✅
- **D.** D. AzureActivity | summarize percentile(DurationMs, 95) by bin(TimeGenerated, 1m), OperationName

**Correct answer:** C

**Explanation:**

The requests table holds Application Insights request telemetry. Filtering to last 15 minutes and /v2/ narrows the dataset. The percentile() aggregation computes p95 latency, and bin(timestamp, 1m) groups into 1-minute time buckets while splitting by operation_Name for per-operation series. Option C exactly matches the statistical and grouping requirements.
Why the other options are incorrect
A: Perf is guest metrics (counters) and unrelated to App Insights requests or latency.
B: Uses average instead of p95 and lacks 1-minute binning.
D: AzureActivity logs control-plane events, not app request timings; wrong table/columns.

---

### Question 13

A central platform team must ensure the Sec-Readers group has read-only visibility across all current and future subscriptions, and baseline governance (policy) must apply automatically to every subscription without per-subscription work.
Requirements
 Central, automatic inheritance to all subscriptions now and future
 Read-only visibility for Sec-Readers
 Baseline policy enforced once
Select TWO actions.

**Options:**

- **A.** A. Assign Reader to Sec-Readers at the root management group ✅
- **B.** B. Assign Reader to Sec-Readers on one representative subscription
- **C.** C. Assign the baseline policy initiative at the root management group ✅
- **D.** D. Assign Contributor to DevOps at the tenant root scope
- **E.** E. Create per-subscription policy assignments manually
- **F.** F. Create deny assignments via RBAC instead of Policy

**Correct answer:** A, C

**Explanation:**

Choice A is correct. RBAC assigned at the root management group is inherited by all child management groups and subscriptions, giving Sec-Readers read-only across the estateincluding future subscriptions as theyre placed under the root. This removes the need for per-subscription role work and guarantees consistent visibility.
Choice C is correct. Assigning a policy initiative at the root management group centralizes governance; definitions and effects (Deny/Modify/Audit) cascade to all current and future subscriptions. This is the recommended pattern for baseline guardrails and eliminates drift.
Why the others are incorrect
B: Limits visibility to a single subscription; doesnt cover others or future ones.
D: Contributor at tenant/root is excessive and violates least privilege.
E: Per-subscription assignments dont scale and are error-prone; they miss future subscriptions until someone remembers to assign them.
F: RBAC deny assignments are not a substitute for Azure Policys configuration/compliance engine.

---

### Question 14

Scenario
Contoso must protect 150 Azure VMs in Australia East and several on-premises Windows servers (files/folders) via MARS. Security requires soft delete, GRS for regional resilience, and the ability to restore VMs even if the primary region is unavailable. Operations wants vault-level RBAC and to keep the vault in the same subscription/RG used by the ops team.
Requirements
Protect Azure VMs + on-prem (MARS agent)
Soft delete enabled; GRS replication
Same-region vault for protected Azure VMs; support cross-region restore
RBAC on the vault resource
Which approach meets the requirements?

**Options:**

- **A.** A. Create an Azure Backup vault (Data Protection) in Australia East; LRS; disable soft delete
- **B.** B. Create a Recovery Services vault in Australia East; set Backup Storage redundancy = GRS; enable soft delete; configure policies; register MARS and Azure VM backups ✅
- **C.** C. Create an RSV in Australia Southeast; protect Australia East VMs across regions by default
- **D.** D. Use Storage account snapshots; upload MARS data to Blob; no vault

**Correct answer:** B

**Explanation:**

A Recovery Services vault (RSV) is the correct control plane for Azure VM backups and MARS (files/folders) on-prem. RSVs must be in the same region as the Azure VMs being protected; selecting GRS gives regionally redundant backup storage, and with supported regions you can enable cross-region restore to recover in the paired region if the primary is unavailable. Soft delete protects against malicious/accidental deletion of backup items. Because the vault is an ARM resource, you apply RBAC at the vault for least-privilege operations (backup operator, restore operator, etc.). This configuration satisfies workload coverage (Azure VMs + MARS), resilience, and governance.
Why the other options are incorrect
A: An Azure Backup vault (Data Protection) doesnt cover MARS/VM-in-guest workloads; LRS and disabling soft delete violate requirements.
C: Vault must be co-located with protected Azure VMs; creating it in another region blocks protection of Australia East VMs.
D: Storage snapshots/Blob alone arent Azure Backup; you lose policy, retention, soft delete, and item-level restore workflows.

---

### Question 15

Scenario
A spoke VNet hosts an App Service and a VM API. Both must privately access Storage (Blob), Key Vault, and Azure SQL with no public Internet exposure. A hub VNet provides central DNS. All VNets (hub + spokes) must resolve those services to private IPs. Public access to each service must be disabled.
Requirements
One private endpoint per service in the consumer VNet
Central private DNS in the hub, linked to all VNets
Disable public network access on services
Which approach meets the requirements?

**Options:**

- **A.** A. Use service endpoints; keep public access; rely on RBAC
- **B.** B. One PE to Storage; share for KV/SQL via hosts files
- **C.** C. Create PEs in the hub; leave services public; advertise routes
- **D.** D. Create a private endpoint per service in the spoke; host Private DNS zones in hub and link VNets; disable public network access ✅

**Correct answer:** D

**Explanation:**

Private Link maps each PaaS service/subresource (e.g., blob, vault, sqlServer) to a distinct NIC with a private IP in the consumer VNetthe VNet where your workloads run. Because Storage, Key Vault, and SQL are different services, you create one private endpoint per service in the spoke so the App Service/VM can talk to each over a first-party, private IP path. Name resolution then must return those private IPs for everyone (hub and all spokes). The scalable way is to host the three Private DNS zones (privatelink.blob.core.windows.net, privatelink.vaultcore.azure.net, privatelink.database.windows.net) once in the hub and link every VNet that needs to resolve them. When you create each PE, the proper A-records are added to the matching zone; all linked VNets immediately resolve FQDNs to the private addresses. Finally, set each service to deny public network access (or selected networks with only the PE path). That prevents accidental fallback to the Internet and closes data-exfil paths while keeping RBAC/token auth unchanged.
Why the other options are incorrect
A: Service endpoints still traverse the public endpoint (just source-IP authorized) and never provide private IPs. This violates no public exposure.
B: A single PE cannot be reused across different services. Host file hacks dont scale, break TLS/SAN validation, and are operationally brittle.
C: PEs are designed to live in the consumer VNet where the callers are; leaving services public defeats the point and breaks Private Link DNS behavior.

---

### Question 16

Goal

Grant read-only access to a single container for 90 days, with the ability to revoke centrally by changing the policy. No write permissions.

**Candidate policies**

****

Which row should the SAS reference?

**Options:**

- **A.** A
- **B.** B
- **C.** C
- **D.** D ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. A stored access policy at the container scope with permissions rl (read + list) exactly matches “read-only container access”: clients can enumerate and read blobs but cannot write/delete. The 90-day expiry matches the time-bound requirement, and because the SAS token references the policy by name, you can centrally revoke or shorten access by editing or deleting the policy—no need to reissue every SAS immediately.

Why the others are incorrect

- A: Account scope is over-broad; it potentially affects multiple containers/services and expands blast radius. Least privilege demands container scope.

- B: Adds write (w), which violates read-only.

- C: Scope is right but 365 days exceeds the stated 90-day window and weakens time-bound control; also, revocation would require changing the policy anyway—so set it correctly from the start.

---

### Question 17

Scenario

You’re classifying archival datasets. Finance wants the **lowest storage cost** for rarely accessed data and accepts **hours-long retrieval**. They also accept a **minimum 180-day** storage commitment. Operations needs hot or cool for active datasets with instant reads.

**Candidates**

****

**Question**

Which row best meets Finance’s archival goal?

**Options:**

- **A.** A. Row 1
- **B.** B. Row 2
- **C.** C. Row 3 ✅
- **D.** D. Row 4

**Correct answer:** C

**Explanation:**

The **Archive** tier is designed for **rarely accessed** data with the **lowest per-GB storage cost**, trading off retrieval time (**hours, rehydration required**) and a **minimum 180-day** storage duration. This exactly matches Finance’s constraints (cheap to store, tolerant of slow reads, OK with 180-day commitment). For active datasets requiring instant access, Hot or Cool remains appropriate, but for long-term cold data, Archive is the intended landing zone.

**Why the other options are incorrect**

- Row 1 (Hot): Optimized for frequent access; highest storage cost; unnecessary for cold data.

- Row 2 (Cool): Good for infrequent access with **instant** reads, but not the lowest cost and has only a 30-day minimum.

- Row 4: Factually inconsistent—the Cool tier does have a 30-day minimum; this candidate does not match platform behavior.

---

### Question 18

Scenario

Regulatory policy demands: **daily backups at 02:00 AEST**, keep **30 daily**, **12 weekly** (Sundays), **12 monthly** (month end), and **7 yearly** (Dec 31). App owners want **application-consistent** backups when possible, and the policy must be reusable for hundreds of VMs.

Question

Which candidate policy matches the requirements?

**Candidates**

****

**Options:**

- **A.** A. Row A ✅
- **B.** B. Row B
- **C.** C. Row C
- **D.** D. Row D

**Correct answer:** A

**Explanation:**

Row **A** exactly expresses the retention matrix: **30 daily**, **12 weekly (Sun)**, **12 monthly (month end)**, **7 yearly (Dec 31)**, with a **daily 02:00 AEST** schedule suitable for consistent maintenance windows (Azure Backup handles the underlying UTC conversion). **Application-consistent** snapshots (when extensions support it) meet the app team’s requirement. Because this is a vault policy, it’s reusable across many VMs, ensuring uniform SLAs and centralized governance.

**Why the other options are incorrect**

- B: Retention is far too short and uses wrong anchors (month start, Jan 1).

- C: Weekly-only schedule fails the **daily** requirement.

- D: Lacks weekly/monthly/yearly retention—non-compliant.

---

### Question 19

A payment workload must keep read/write during a single zone failure in the primary region. During a regional outage, the team must immediately read from a secondary region without initiating failover.

**Candidates**

****

**Question**

Which row should you choose?

**Options:**

- **A.** A. Row 1
- **B.** B. Row 2
- **C.** C. Row 3
- **D.** D. Row 4 ✅

**Correct answer:** D

**Explanation:**

RA-GZRS gives zone redundancy in the primary (so a zonal event does not stop read/write) and geo-replication with read access to the secondary region, enabling immediate reads during a regional incident without failover. It uniquely satisfies both requirements.

**Why the other options are incorrect**

- Row 1 (LRS): Single data center; no zone/region resilience.

- Row 2 (ZRS): Survives zonal events but has no readable secondary region.

- Row 3 (GRS): Secondary exists but can’t be read until failover is performed.

---

### Question 20

Security needs a user to read secrets from kv-prod without managing the vault or other resources. Legacy access policies are disabled; the tenant uses RBAC for Key Vault data plane.

Goal

Permit get/list secrets only in kv-prod. No control-plane rights. No cross-scope elevation.

**Candidate rows**

****

Which single row meets the goal?

**Options:**

- **A.** A. Row 1
- **B.** B. Row 2
- **C.** C. Row 3 ✅
- **D.** D. Row 4
- **E.** E. Row 5

**Correct answer:** C

**Explanation:**

Choice C is correct. The Key Vault Secrets User RBAC role on the specific vault grants data-plane permissions to list and get secrets without enabling management operations. Scoping at kv-prod ensures the user’s permissions don’t spill to other vaults or resource types.

Why the others are incorrect

A: Subscription Reader cannot read secret values—RBAC data-plane permissions are required.

B: Key Vault Reader is control/metadata focused; it does not allow reading secret values.

D: Contributor grants manage operations on many resources but still lacks secret data-plane permissions.

E: Owner is over-privileged, including role assignments and full control on the vault.

---

### Question 21

Scenario

An analytics landing zone ingests raw data to the container raw/ with prefixes by tenant (raw/tenantA/, raw/tenantB/). Compliance wants to minimize Hot/Cool spend but keep data for one year. The rule should: keep new data in Hot for immediate processing; move cold data to Cool after a short period; move long-cold data to Archive; and finally purge after one year. Snapshots and versions must follow the same aging pattern. No impact to other containers.

**Requirements**

- Scope: container “raw/”, prefix-based include (tenant folders)

- Actions: Hot→Cool after 30 days idle; Cool→Archive after 180 days; Delete at 365 days

- Apply to base blobs, snapshots, and versions

**Candidates**

****

**Question**

Which row meets the requirements?

**Options:**

- **A.** A. Row A ✅
- **B.** B. Row B
- **C.** C. Row C
- **D.** D. Row D

**Correct answer:** A

**Explanation:**

Row A precisely mirrors the retention plan: it uses a prefix-scoped include that targets raw/tenant* so only the intended container/prefixes are affected; it ages base blobs, snapshots, and versions uniformly; and it implements the three-stage cost/compliance curve—Cool at 30 days of inactivity (lower hot/cool spend), Archive at 180 days (lowest at-rest cost for long-cold data), and hard delete at 365 days to satisfy the one-year retention cap. Because the scope is explicit, other containers remain untouched.

**Why the other options are incorrect**

- Row B: Over-broad (no scope filter; hits all containers), too aggressive (archives at 7 days), deletes at 30 days (violates the one-year requirement), and ignores snapshots/versions.

- Row C: Retention path is incomplete (no delete) and too slow to archive (365 days), failing the “Archive at 180 days; delete at 365” requirement.

- Row D: Scopes only tenantA (missing tenantB/others) and does not include versions, violating “apply to base, snapshots, and versions.”

---

### Question 22

Scenario

You need a **private** production registry for images pulled in Australia East and Australia Southeast. Security requires: **Private Link only** (no public endpoint), **admin user disabled**, and **immutable image tags** to prevent tag rewrites. Ops wants **geo-replication** so pulls are served locally in both regions.

**Candidates**

****

**Question**

Which single row meets all requirements?

**Options:**

- **A.** A. Row 1
- **B.** B. Row 2
- **C.** C. Row 3 ✅
- **D.** D. Row 4

**Correct answer:** C

**Explanation:**

Only **Premium** supports both **Private Link** (true private access) and **geo-replication** (regional replicas to keep pulls local). Disabling the **admin user** eliminates a shared, static credential in favor of Entra ID permissions (e.g., AcrPull). **Immutable tags** (image-locking) prevent “latest” or version tags from being overwritten, which is a common production safety control. Row 3 is the only candidate that simultaneously meets **network isolation**, **credential posture**, **tag immutability**, and **multi-region pulls**.

**Why the other options are incorrect**

- Row 1: Standard lacks Private Link and immutable tags; keeps a public endpoint and admin user.

- Row 2: Premium is good for features, but **service endpoints ≠ Private Link** (no private endpoint), and tags remain mutable.

- Row 4: Basic has neither Private Link nor geo-replication; admin user remains enabled.

---

### Question 23

Scenario

You need internal load balancing for three VMs in a spoke VNet. Requirements: Standard SKU, static, zone-redundant front end; backend NICs; TCP 443 probe; NSGs must allow probes; no public exposure.

Question

Which row meets the requirements?

Candidates

**Options:**

- **A.** A. Row A
- **B.** B. Row B ✅
- **C.** C. Row C
- **D.** D. Row D

**Correct answer:** B

**Explanation:**

A **Standard** internal Load Balancer supports **NIC-based** backend pools for standalone VMs, **TCP** health probes, and a **static** private frontend address chosen from the subnet—exactly what you need for stability (no address churn during maintenance). Standard LB also integrates with **NSGs**: the probe originates from the **AzureLoadBalancer** service tag, so your subnet/VM NSGs must allow probe traffic to the **probe port** (443 here) or instances will be marked **Unhealthy** and excluded from distribution. “Zone-redundant” ensures the frontend/LB plane remains available across zonal outages in supported regions while your VM backends are placed appropriately. Row B is the single candidate that is internal, Standard, static, zone-redundant, uses NIC backends, and has the correct probe.

Why the other options are incorrect

- A: Public + Basic + dynamic + HTTP 80 is the opposite of your private, Standard, static, and 443 requirements.

- C: Internal/Standard is fine, but using a **dynamic** frontend violates the “static” requirement and risks IP churn.

- D: An **internal** load balancer cannot and should not expose a public IP; that breaks “no public exposure.”

---

### Question 24

Scenario
A single Linux container must run privately in an existing VNet/subnet with no public IP. The image is in a private Azure Container Registry. Security forbids embedding registry credentials in scripts; the app also needs two secure environment variables that shouldnt appear in command output or logs. You want the fewest moving parts.
Requirements
ACI in a VNet with private IP only
Pull from ACR without passing credentials on the CLI
Provide secrets as secure environment variables
Which approach meets the requirements?

**Options:**

- **A.** A.Create a user-assigned managed identity (UAMI); grant it AcrPull on the registryaz container create into the subnet with --assign-identity (UAMI) and no public IPPass secrets as secure environment variables; image pull via MI (no creds on CLI) ✅
- **B.** B.Enable anonymous pull on ACRaz container create with a public IP/FQDNSet secrets as standard env vars
- **C.** C.Enable the ACR admin useraz container create with --registry-username/--registry-passwordExpose container publicly
- **D.** D.Stand up AKSStore ACR creds in Kubernetes SecretsPublish via public load balancer

**Correct answer:** A

**Explanation:**

ACI with VNet integration delivers a private IP-only container group. Granting AcrPull to a managed identity allows the runtime to authenticate to ACR without passing any credentials on the CLI; –assign-identity binds that identity to the group so pulls succeed silently. Secure environment variables in ACI are masked from command output, letting you inject sensitive config without leaking in logs. This pattern achieves private networking, credential-less pulls, and secret handling with minimal components and operational burden.
Why the other options are incorrect
B: Anonymous pulls and a public IP contradict private networking and credential hygiene; plain env vars risk exposure.
C: The admin user is a shared static secret; embedding it on the CLI leaks credentials to cloud shells, history, or pipelines.
D: AKS introduces significant overhead for a single container and typically publishes via a load balancer unless you add extra private networking constructs.

---

### Question 25

Scenario
You inherit a Bicep file that hard-codes location: “eastus“, uses a plain string for adminPassword, emits that password in an output, and deploys several resources with no tags. Security/FinOps require: (1) location should default to the resource groups location, (2) Department/Owner tags must be applied to every resource, and (3) secrets must not be emitted by the template and should be provided as secure parameters. You want the smallest set of changes that satisfies all requirements and keeps the file easy to reuse.
Which change set best meets the goal?

**Options:**

- **A.** A.Keep location = ‘eastus‘ as a variableAdd output adminPassword string for pipelinesApply tags at the resource group only
- **B.** B.Add param location string with no defaultKeep adminPassword as plain stringApply tags to the storage account only
- **C.** C.Move networking into a moduleKeep location and adminPassword hard-codedAdd a dependsOn chain for order
- **D.** D.Add param location string = resourceGroup().location and reference it everywhereAdd @secure() param adminPassword string and remove any secret outputsAdd param tags object (Department, Owner) and assign tags: tags on every resource ✅

**Correct answer:** D

**Explanation:**

Parameterizing location with a default of resourceGroup().location makes the template portable and removes hardcoded geography. Declaring adminPassword as a secure parameter and removing secret outputs prevents secret leakage through deployment history and output capture. Supplying a tags object parameter and wiring it to each resource guarantees consistent Department/Owner tagging across the deployment. This trio of edits is minimal, reusable, and satisfies security/FinOps with least disruption.
Why the other options are incorrect
A: Leaves a fixed location via variable, leaks secrets via output, and fails to tag every resource.
B: Omits the location default (reduces reuse), keeps the password non-secure, and tags only a subset of resources.
C: Refactoring into modules doesnt meet any of the stated governance/security requirements; still hard-codes location and secrets.

---

### Question 26

You must issue time-bound upload rights from an app using Entra ID without exposing account keys. Use _____.

**Options:**

- **A.** A. Account SAS
- **B.** B. User delegation SAS ✅
- **C.** C. Service SAS
- **D.** D. Stored access policy

**Correct answer:** B

**Explanation:**

Choice B is correct. A user delegation SAS is signed with a user delegation key derived from Entra ID (Azure AD) via the blob service, so the app authenticates using identity, not the storage account key. This gives you short-lived, least-privilege tokens that are tied to AAD auth flows (including conditional access and token lifetimes) and avoids key sprawl in code or pipelines.
Why the others are incorrect
A: Account SAS is signed with the storage account keyprecisely what youre trying to avoid exposing.
C: Service SAS also requires the account key (or a stored access policy bound to that key).
D: A stored access policy isnt a SAS type; its a container/account-level object you reference to control or revoke SAS tokens. Youd still need a SAS (and typically an account key) to use it.

---

### Question 27

Scenario
A platform team needs to protect Azure managed disks (crash-consistent snapshots + long-term retention) and Azure Blob containers with policy-based backups managed centrally through Backup Center. They prefer the modern Data Protection experience, no public endpoints, and hardened deletion behavior.
Requirements
Use Azure Backup vault (Data Protection)
Back up Azure Disks and Azure Blobs with policies
Integrate via Backup Center; use RBAC
Private networking (where applicable) and strong delete protection
Which approach meets the requirements?

**Options:**

- **A.** A. Recovery Services vault; VM backup policy for disks; Storage lifecycle rules for blobs
- **B.** B. RSV + MARS agent for blobs; per-container scripts for snapshots
- **C.** C. Backup to a Storage account with immutability; manage in Azure Monitor
- **D.** D. Create an Azure Backup vault (Data Protection) in the target region; configure Disk Backup and Blob Backup policies in Backup Center; apply RBAC; enable recommended security settings ✅

**Correct answer:** D

**Explanation:**

The Azure Backup vault (resource type Microsoft.DataProtection/backupVaults) under Azure Backup (Data Protection) is the control plane for Disk Backup and Blob Backup. You create a Backup vault in the region, onboard workloads via Backup Center, and assign policy-based protection (schedules, retention). The vault is an ARM resource with RBAC, built-in security features (soft delete, vault-level protections), and optional network isolation where supported. This is the modern path for disks/blobsdistinct from Recovery Services vault, which primarily covers Azure VMs, SQL/SAP HANA in VM, and MARS.
Why the other options are incorrect
A: RSV VM policies dont manage Disk Backup (Data Protection) or Blob Backup; lifecycle rules are storage governance, not Azure Backup.
B: MARS is for files/folders on Windows machinesnot for Blob containers.
C: Storage immutability is valuable but doesnt provide Azure Backups policy/restore workflows or centralized management in Backup Center.

---

### Question 28

Scenario
You need secure, low-downtime key management for a storage account: no secrets in repos, predictable rotation, and minimal impact on running apps.
Select TWO actions.

**Options:**

- **A.** A. Use Key Vault managed storage account keys (auto-rotation) ✅
- **B.** B. Commit account keys to the repo; rotate quarterly
- **C.** C. Grant Storage Account Key Operator broadly to dev teams
- **D.** D. Disable RBAC and use shared key only
- **E.** E. Staged rotation: regenerate key2, update apps, then rotate key1 ✅
- **F.** F. Use SAS with stored access policy for clients instead of sharing account keys

**Correct answer:** A, E

**Explanation:**

Choice A is correct. Key Vaults managed storage account keys feature securely stores the account keys and can automatically regenerate/rotate them on a schedule, removing manual handling and keeping keys out of code and CI/CD variables. It also gives you auditing and RBAC control around who can retrieve keys, plus integration points for apps to fetch secrets at runtime rather than embedding them.
Choice E is correct. Staged rotation is the operational pattern for near-zero downtime: regenerate the unused key (key2), update all app configurations to use key2, verify traffic, then regenerate the previously active key (key1). This leapfrogging ensures a valid key is always in service while cycling secrets safely.
Why the others are incorrect
B: Committing secrets to a repository is a critical anti-pattern (exposure, forks, history). Even with quarterly rotation, you risk leaks and long-lived credentials.
C: Broadly granting Key Operator increases the insider-risk surface and makes uncontrolled exports more likely; use least privilege and automation instead.
D: Disabling RBAC and relying solely on shared keys removes identity-based controls, makes scoping impossible, and encourages secret sharing across teams.
F: SAS with a stored access policy is a good way to avoid sharing account keys directly with clients, but it doesnt address how you manage and rotate the underlying account keys for your own services. Its complementary, not a replacement for A/E.

---

### Question 29

Scenario
On-prem (via VPN) must resolve Azure private endpoints (Blob/KV/SQL) to private IPs. You want a hub-and-spoke DNS pattern without running your own DNS servers. On-prem should use conditional forwarding for the privatelink zones.
Which TWO actions meet the goal?

**Options:**

- **A.** A. Create Public DNS zones for privatelink domains
- **B.** B. Deploy Azure DNS Private Resolver in hub with an inbound endpoint; on-prem forward privatelink queries to it ✅
- **C.** C. Create Private DNS zones for privatelink domains and link them to hub and spokes ✅
- **D.** D. Use hosts files on on-prem machines
- **E.** E. Add a Resolver outbound endpoint/ruleset for on-prem zones
- **F.** F. Make each spoke a DNS server

**Correct answer:** B, C

**Explanation:**

You need authoritative private zones for the Private Link domains and a single Azure-native ingress path for on-prem queries. Step 1: create Private DNS zones for each privatelink.* domain and link them to the hub VNet and every spoke VNet; this ensures any Azure workload resolves Storage/KV/SQL FQDNs to private IPs returned by the corresponding private endpoints. Step 2: deploy Azure DNS Private Resolver with an inbound endpoint in the hub VNet. Your on-prem DNS servers add conditional forwarders for the privatelink.* zones pointing to that inbound endpoints private IP. Result: on-prem ? hub resolver ? Azure Private DNS zones ? private IPs for PEs, with no IaaS DNS VMs to patch, scale, or secure. This centralizes DNS, keeps management simple, and works for all current/future spokes that link to the zones.
Why the other options are incorrect
A: privatelink.* must be Private zones; making them Public exposes records to the Internet and breaks Private Link resolution.
D: Hosts files dont scale, drift instantly, and cannot track record changes when PEs are added/removed.
E: Outbound endpoints/rulesets solve Azure?on-prem lookups; your requirement is on-prem?Azure, so you need an inbound endpoint.
F: VNets are not DNS servers. You still need zones and a resolver to handle on-prem queries.

---

### Question 30

Scenario
A production VM currently runs in subscription A, resource group rg-app, in Australia East. You must move it to subscription B in Australia Southeast with minimal manual steps and orchestrated dependency handling (NIC, public IP, NSG, disks). You also want validation before cutover and the ability to retain the original resources until commit.
Proposed solution
Use Azure Resource Mover to move the VM and its dependent resources from Australia East to Australia Southeast, targeting subscription B; perform prepare, initiate move, commit, then decommission source resources.
Does the proposed solution meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Azure Resource Mover is the first-party orchestrator for cross-region moves of Azure resources, including VMs, and supports cross-subscription targeting. It discovers and links dependencies (NICs, disks, NSGs, public IPs), performs validations, and stages the move so you can test/prepare, then commit with predictable downtime. It also preserves a rollback window until you commit, aligning with the need for safe cutover and minimal manual wiring.
Why the other option is incorrect
No: Direct Move operations do not support changing regions for VMs; manual export/redeploy lacks the orchestration, validation, and commit/rollback workflow required here.

---

### Question 31

Scenario
Contoso will host a Linux containerized web API in Australia East. The platform mandates: private outbound to VNets (database via private endpoints), multi-AZ resilience, and minimal cold starts. The team wants a multi-tenant offering (not ASE), zone redundancy, and room to scale out during traffic spikes.
Requirements
Linux containers; Premium features
Regional VNet integration (outbound)
Zone-redundant plan; scale-out capable
Which App Service plan choice best meets the requirements?

**Options:**

- **A.** A. Free (F1) Linux; no VNet; single-zone
- **B.** B. Basic (B1) Linux; VNet integration; single-zone
- **C.** C. Isolated v2 (ASEv3) Linux; private environment (overkill)
- **D.** D. Premium v3 Linux (P1v3+) with regional VNet integration and zone redundancy ✅

**Correct answer:** D

**Explanation:**

Premium v3 (Linux) provides the performance envelope for container apps, supports regional VNet integration for outbound private access, and offers zone-redundant App Service plans in supported regions. It remains multi-tenant (not ASE), scales out elastically, and reduces cold-start impact versus lower SKUs. This aligns with container, networking, and resiliency requirements without the cost/complexity of ASE.
Why the other options are incorrect
A: Free lacks VNet integration and scale/perf; not production-grade.
B: Basic supports VNet integration but not zone redundancy and is capacity-limited for spiky APIs.
C: ASEv3 is isolated and powerful but unnecessary (and costly) when multi-tenant Premium v3 meets all needs.

---

### Question 32

Project Alpha lives in rg-alpha. Engineers need full control of rg-alpha but must have read-only visibility across the subscription for discovery and diagnostics. They must not be able to modify resources in other resource groups.
Requirements
Full control: rg-alpha only
Read-only elsewhere in subscription
No cross-RG modification
Which assignment pattern delivers the required effective access?

**Options:**

- **A.** A. Contributor at subscription; Reader at rg-alpha
- **B.** B. Owner at rg-alpha; Reader at subscription ✅
- **C.** C. Reader at management group; Contributor at subscription
- **D.** D. User Access Administrator at subscription; Reader at rg-alpha

**Correct answer:** B

**Explanation:**

Choice B is correct. Reader at subscription gives estate-wide visibility. Owner at rg-alpha adds full administrative permissions for that RG only; effective rights are the union, so engineers become Owner in rg-alpha and remain Reader everywhere else. This preserves least privilege outside the target RG while enabling full control inside it.
Why the others are incorrect
A: Contributor at subscription grants modify rights across all RGsover-scoped.
C: Management group Reader is fine for visibility, but adding Contributor at subscription again over-scopes modification rights.
D: User Access Administrator lets changing role assignments at subscriptionprivilege escalation riskand does not provide required write permissions to resources.

---

### Question 33

Contoso is rolling out an analytics workload in Australia East. The app runs in one subnet and must reach a StorageV2 account privately. Security requires only the app (via private endpoint) and select trusted Microsoft services (e.g., Backup/Monitor) to reach the account; all other Internet traffic must be blocked. The team also wants TLS 1.2+ and public blob access disabled, and RBAC for data (no shared keys in code).
Requirements
Private endpoint from the app subnet
Allow trusted Microsoft services
No public IP allowlists (everything else blocked)
TLS 1.2+; disable public blob access; RBAC for data
Which configuration meets the requirements?

**Options:**

- **A.** A. Allow all networks; rely on RBAC; enforce TLS 1.2
- **B.** B. Selected networks; service endpoints only; disable public access
- **C.** C. Selected networks; private endpoint; enable Allow trusted Microsoft services; leave IP allowlist empty; enforce TLS 1.2; disable public blob access ✅
- **D.** D. Public network access: Disabled; no exceptions

**Correct answer:** C

**Explanation:**

Selected networks enables the firewall so the public endpoint is denied by default. A private endpoint gives the VNet a private IP path that bypasses the public surface. Enabling Allow trusted Microsoft services adds the narrow exception you need for first-party services (e.g., Backup/Monitor) without opening the Internet. Keeping the public IP allowlist empty prevents arbitrary public access, while TLS 1.2+ and disabling public blob access harden the account. RBAC handles data authorization without exposing shared keys.
Why the other options are incorrect
A: Allow all networks leaves the public endpoint open; RBAC controls identity, not network exposure.
B: Service endpoints ? private endpoints; they dont meet the private access requirement and dont automatically admit trusted services.
D: Disabling public network access also blocks the trusted-services exception you need for operations.

---

### Question 34

Scenario
A hub VNet has a VPN gateway to on-prem. A spoke VNet hosts workloads that must reach on-prem through the hubs gateway. There are no NVAs; only Azures VPN gateway is used. Traffic between spokes should not be transitive unless explicitly peered via the hub using supported features.
Which TWO peering settings are required to let the spoke use the hubs VPN gateway?

**Options:**

- **A.** A. Hub?Spoke: Allow forwarded traffic
- **B.** B. Hub?Spoke: Allow gateway transit ✅
- **C.** C. Hub?Spoke: Use remote gateways
- **D.** D. Spoke?Hub: Allow forwarded traffic
- **E.** E. Spoke?Hub: Use remote gateways ✅
- **F.** F. Spoke?Hub: Allow gateway transit

**Correct answer:** B, E

**Explanation:**

Gateway transit is offered by the hub to its peers; the hub peering must be set to Allow gateway transit. The spoke must consume that gateway by enabling Use remote gateways on its peering to the hub. With those two flags combined, the spoke routes to on-prem via the hubs Azure VPN Gateway. Allow forwarded traffic isnt needed here because an Azure VPN Gateway handles the routing, not an NVA.
Why the other options are incorrect
A/D: Allow forwarded traffic is for NVAs/forwarders; not required for Azure VPN gateway transit.
C/F: These are reversed; the hub doesnt Use remote gateways, and the spoke doesnt Allow gateway transit.

---

### Question 35

An app in a VNet uses a private endpoint to a storage account. Security wants only this app and trusted Microsoft services (e.g., Azure Backup/Monitor) to reach the account; everything else on the public Internet must be blocked.
Requirements
Private endpoint from the app subnet
Allow trusted Microsoft services
Block other public traffic
Which configuration fits?

**Options:**

- **A.** A. Public network access: Disabled; no endpoints
- **B.** B. Selected networks; add VNet subnet only
- **C.** C. Selected networks; private endpoint; enable Allow trusted Microsoft services; no public IP ranges ✅
- **D.** D. Allow all networks; rely on RBAC only

**Correct answer:** C

**Explanation:**

Choice C is correct. Selected networks turns on the storage firewall so public traffic is denied by default unless explicitly allowed. Creating a private endpoint gives the VNet a private IP path that ignores the public firewall. Enabling Allow trusted Microsoft services carves a narrow exception for specific first-party services that must reach the account for backups, monitoring, import/export, etc. Leaving the IP allowlist empty prevents any arbitrary public IP from getting through, so only the private endpoint and trusted services work. This is the precise combo for PE + trusted services only.
Why the others are incorrect
A: Public network access Disabled blocks all public trafficincluding trusted Microsoft services. You would break backup/monitoring scenarios that rely on the trusted services exception.
B: Adding the VNet subnet (service endpoint) doesnt apply to private endpoints and still blocks trusted services unless you toggle the specific allow-list; also, private endpoint is the recommended pattern over service endpoints for strict isolation.
D: Allow all networks leaves the account exposed to the Internet. RBAC governs who, not where; it does not enforce network isolation.

---

### Question 36

Scenario
You will asynchronously replicate new block blobs from a StorageV2 source in Australia East to a StorageV2 destination in Australia Southeast. Containers already exist; same tenant; replication should start as soon as the policy is created. Only block blobs are used.
Which TWO actions must be completed before creating the object replication policy?

**Options:**

- **A.** A. Enable Change feed on the source account ✅
- **B.** B. Enable Blob versioning on both source and destination accounts ✅
- **C.** C. Enable hierarchical namespace (HNS) on both accounts
- **D.** D. Use append blobs for faster replication
- **E.** E. Create the policy only on the source account
- **F.** F. Require customer-provided keys (CPK) for uploads

**Correct answer:** A, B

**Explanation:**

Object Replication relies on the source accounts change feed to discover operations and on versioning on both accounts to track/replicate updates and deletes consistently. Enabling change feed (source) and blob versioning (both) ensures the replication pipeline has the event stream and version history it needs. With these prerequisites in place, policy creation can begin moving data immediately.
Why the other options are incorrect
C: OR is not supported when hierarchical namespace (HNS) is enabled.
D: OR supports block blobs only; append/page blobs are not replicated.
E: The policy is created on the destination and associated to the source via policy ID; source-only is invalid.
F: Blobs written with customer-provided keys (CPK) arent replicated by OR.

---

### Question 37

Scenario
Your data engineering team frequently overwrites parquet files during daily loads and occasionally deletes the wrong files. They want built-in recovery without backups: instant rollback after an overwrite and self-restore after a delete. They also want to keep a short journal of changes for operational auditing but cant tolerate heavy operational overhead.
Which TWO features must be enabled to meet the rollback and undelete goals?

**Options:**

- **A.** A. Blob versioning ✅
- **B.** B. Change feed
- **C.** C. Cross-region replication (GRS/RA-GRS)
- **D.** D. Container soft delete
- **E.** E. Immutability (time-based)
- **F.** F. Blob soft delete ✅

**Correct answer:** A, F

**Explanation:**

Blob versioning creates a new version on every write, letting you recover the previous version after a bad overwrite with a simple promote or read of the prior versionno external backup system needed. Blob soft delete protects against accidental deletions by retaining the deleted object for a configured retention window, enabling straightforward undeletion. Combined, these two controls directly address the two failure modes (overwrite and delete) while keeping operations lightweight and user-driven.
Why the other options are incorrect
B (Change feed): Great for auditing/ETL triggers, but its only an event log; it doesnt preserve content you can roll back to.
C (GRS/RA-GRS): Geo-redundancy improves durability/DR posture but doesnt provide point-in-time local recovery from user error (overwrite/delete).
D (Container soft delete): Protects against container-level deletion, not blob overwrites or single-blob deletes inside the container.
E (Immutability): WORM locks content (compliance). It prevents overwrites/deletes rather than enabling easy rollback/undelete; it also complicates normal operations.

---

### Question 38

Scenario
Your app is live at contoso.azurewebsites.net. You need to serve www.contoso.com and the apex contoso.com with end-to-end TLS, without downtime. DNS is hosted at a third-party provider. Use managed certificates if possible.
Requirements
Verify domain ownership
Map both apex and www
Bind TLS and enforce HTTPS
Which sequence satisfies the requirements?

**Options:**

- **A.** A.Add A record from contoso.com to the current outbound IPAdd CNAME for www ? contoso.azurewebsites.netSkip verification; rely on RBAC
- **B.** B.Add TXT record for domain verificationAdd CNAME for www ? contoso.azurewebsites.net; add A/ALIAS for contoso.com to the apps IPUpload third-party cert; skip HTTPS Only
- **C.** C.Add TXT record for verification; add CNAME for www ? contoso.azurewebsites.net; add A/ALIAS (or ALIAS/ANAME) for apex contoso.com to the apps IPIn App Service: add both hostnames; create App Service Managed CertificateAdd TLS/SSL binding for both hostnames; set HTTPS Only = On ✅
- **D.** D.Point NS of contoso.com to Azure DNSWait for 48hAdd hostnames in App Service

**Correct answer:** C

**Explanation:**

A correct mapping flow is: prove ownership (TXT), point www via CNAME to *.azurewebsites.net, and point the apex via A/ALIAS/ANAME to the apps public IP. Then add the custom hostnames in App Service so the platform serves them, create an App Service Managed Certificate (no-cost) for each hostname, bind the certificates, and enforce HTTPS. This sequence addresses DNS, platform binding, and TLS in the right order with minimal downtime.
Why the other options are incorrect
A: No ownership verification; apex pointed to outbound IP is incorrect (use apps assigned IP/ALIAS).
B: Works for DNS mapping but omits HTTPS enforcement and skips using managed certs (adds cost/ops).
D: Changing NS to Azure DNS is unnecessary and disruptive; you can map from any provider.

---

### Question 39

A landing zone must enforce: deploy only in Australia East/SE, deny public IP on VMs/NICs, and ensure a Department tag exists with a default value for existing resources. Compliance must be managed centrally and remediated at scale.
Requirements
Allowed regions: AU East/SE
Deny public IP for compute
Ensure Department tag present on existing resources
Central assignment and remediation
Select TWO actions to meet all requirements.

**Options:**

- **A.** A. Assign Allowed locations at subscription (Deny)
- **B.** B. Use RBAC deny assignment instead of Policy
- **C.** C. Append tag without a remediation task
- **D.** D. Create an initiative (Allowed locations, Deny public IP, Require/Modify Department tag) at management group ✅
- **E.** E. Use Azure Blueprints artifacts for policy (deprecated path)
- **F.** F. Enable remediation tasks with system-assigned managed identity ✅

**Correct answer:** D, F

**Explanation:**

Choice D is correct. An initiative groups multiple policiesAllowed locations (Deny), compute public IP controls (Deny), and Require/Modify tagto one central assignment at the management group so it scales to current and future subscriptions and enforces a single governance baseline.
Choice F is correct. Modify/Append effects on existing resources need a remediation task that runs with a managed identity having write permissions to apply tags or deploy fixes. Without remediation, existing non-compliant resources remain out of policy.
Why the others are incorrect
A: Helps with region control but does not address public IP denial or tag remediation by itself.
B: RBAC deny assignments are not the primary mechanism for configuration compliance; Policy is.
C: Append without remediation wont fix existing resources at scale.
E: Blueprints are deprecated; initiatives + policy assignments are the recommended path.

---

### Question 40

Scenario
You need a public endpoint for a Standard Load Balancer that is static, zone-redundant across Zones 13 in Australia East, and compatible with production security features. The IP must not change during maintenance, and you prefer the modern SKU.
Which public IP configuration should you create?

**Options:**

- **A.** A. Basic SKU, Dynamic, any zone
- **B.** B. Basic SKU, Static, Zone 1
- **C.** C. Standard SKU, Dynamic, Zone-redundant
- **D.** D. Standard SKU, Static, Zone-redundant ✅

**Correct answer:** D

**Explanation:**

A Standard public IP is required for Standard Load Balancers and supports advanced security/feature parity. Static allocation guarantees the IP doesnt change on maintenance. Choosing Zone-redundant makes the address resilient across zones in the same region (when supported), so LB front ends remain available even if a zone is down. This matches the required stability and resiliency.
Why the other options are incorrect
A/B: Basic SKU lacks many production features and isnt supported for Standard LB front ends; dynamic can change on updates.
C: Standard SKU is right, but Dynamic allocation isnt supported for Standard public IPs (Standard is static by design) and does not meet must not change.

---

### Question 41

A DevOps team must start/stop/redeploy VMs and reset credentials for VM instances in a single resource group. They must not change VNets, NSGs, disks in other accounts, or assign roles. No subscription-wide administration.
Requirements
Manage VMs only
No networking/storage admin
No role assignments
Which built-in role best fits?

**Options:**

- **A.** A. Virtual Machine Contributor ✅
- **B.** B. Contributor
- **C.** C. Owner
- **D.** D. Reader

**Correct answer:** A

**Explanation:**

Choice A is correct. Virtual Machine Contributor grants full management of virtual machines, including start/stop/redeploy and OS credential resets, but excludes broader resource administration like virtual networks, load balancers, storage accounts, and role assignments. It aligns tightly to VM-scoped operational needs without elevating control to unrelated planes.
Why the others are incorrect
B: Contributor enables create/update/delete across all resource types in scope, including networking and storagetoo broad for VM-only operations.
C: Owner includes Contributor plus role assignment (User Access Administrator)excessive and violates least privilege.
D: Reader is view-only and cannot start/stop or redeploy VMs.

---

### Question 42

Scenario
A spoke VNet hosts web/app subnets. All egress from those subnets must traverse a central NVA firewall in the hub VNet; direct Internet breakout from spokes is forbidden. The NVA has a default route to the Internet and rules for egress. No NVAs exist in spokes. The VPN gateway in the hub advertises on-prem prefixes (BGP). You must force all Internet-bound traffic from the spoke subnets through the hub NVA while keeping on-prem routes from BGP intact.
Requirements
Steer 0.0.0.0/0 from spoke subnets ? hub NVA
Preserve BGP-learned on-prem routes
No direct Internet from spokes
Which configuration meets the requirements?

**Options:**

- **A.** A. Associate a route table to the hub gateway subnet with 0.0.0.0/0 ? Internet
- **B.** B. Enable service endpoints to Storage and let system routes handle Internet
- **C.** C. On each spoke subnet: route 0.0.0.0/0 ? Virtual network gateway; disable BGP propagation
- **D.** D. On each spoke subnet: associate a route table with 0.0.0.0/0 next hop = Virtual appliance (hub NVAs private IP); keep BGP propagation enabled ✅

**Correct answer:** D

**Explanation:**

To force egress via an NVA, you place a UDR on each spoke subnet with a default route 0.0.0.0/0 ? Virtual appliance pointing to the NVAs private IP in the hub. That diverts all unknown destinations (i.e., Internet) to the firewall, which can then SNAT/egress under centralized control. Leaving BGP route propagation enabled on the route table ensures on-prem prefixes learned from the hub gateway remain in the effective routing table so spoke-to-on-prem traffic keeps using the gateway path, not the NVA default. This yields split behavior: on-prem via BGP routes; Internet via NVA UDR.
Why the other options are incorrect
A: A route on the gateway subnet doesnt control spoke egress; it also points to Internet, bypassing the NVA requirement.
B: Service endpoints only affect service traffic to specific PaaS services; they dont solve default Internet egress control.
C: Sending 0.0.0.0/0 to the virtual network gateway conflicts with BGP handling and isnt how you forward Internet via an NVA; disabling BGP propagation would hide on-prem routes from the spoke.

---

### Question 43

Scenario
You inherit an ARM template that hard-codes location: “eastus“, lacks any tags, and deploys a StorageV2 account with no HTTPS-only enforcement. Security and FinOps requirements now mandate: (1) location should default to the resource groups location, (2) global tags Department and Owner must be applied to every resource, and (3) the storage account must be HTTPS-only. You need to modify the existing template to meet these requirements with minimal churn.
Select THREE changes to implement.

**Options:**

- **A.** A. Add a location parameter defaulting to resourceGroup().location; reference it for each resources location ✅
- **B.** B. Add a tags object parameter (Department, Owner) and assign it to each resources tags property ✅
- **C.** C. Set properties.supportsHttpsTrafficOnly: true on the storage account resource ✅
- **D.** D. Change kind to BlobStorage to force HTTPS-only
- **E.** E. Replace parameters with a variables(‘location‘) = ‘eastus‘ to keep the original behavior
- **F.** F. Add dependsOn between unrelated resources to enforce HTTPS

**Correct answer:** A, B, C

**Explanation:**

Parameterizing location with a default of resourceGroup().location makes the template portable and aligns with subscription/RG placement without edits. A tags object parameter promotes consistent tagging for all resources; wiring it into each resources tags property satisfies FinOps. Enforcing HTTPS-only by setting supportsHttpsTrafficOnly: true is the correct storage-account setting and doesnt require new resources or dependencies. Together, these edits bring the template in line with security and governance standards while preserving flexibility.
Why the other options are incorrect
D: Changing kind to BlobStorage doesnt force HTTPS-only and narrows capabilities compared to StorageV2; HTTPS-only is a separate property.
E: Re-hard-coding the location via variables defeats the portability requirement and ignores the RG-default goal.
F: dependsOn controls deployment order, not HTTPS behavior; it doesnt enforce security properties.

---

### Question 44

Scenario
Production VMSS must raise: P1 SMS/Teams when Percentage CPU &gt; 80% for 10 minutes; P2 email for warnings. During a weekly maintenance window (Saturdays 22:0023:00 AEST) all alerts should be suppressed for the Prod resource group. Two action groups already exist: AG-P1 (SMS+Teams) and AG-P2 (Email).
Select THREE actions that together meet the goal.

**Options:**

- **A.** A. Create a metric alert rule at the VMSS scope: Percentage CPU > 80% over 10m, evaluation frequency 1m ✅
- **B.** B. Replace AG-P1/AG-P2 with a single action group to simplify routing
- **C.** C. Create an alert processing rule (Suppression) for the Prod RG: Saturdays 22:0023:00 AEST ✅
- **D.** D. Use dynamic thresholds on all metrics across subscriptions to auto-tune severity
- **E.** E. Create an alert processing rule (Route) scoped to Prod RG: send Sev0/Sev1 to AG-P1; send Sev2+ to AG-P2 ✅
- **F.** F. Set the alert rule to auto resolve only, relying on Smart Groups for all deduplication

**Correct answer:** A, C, E

**Explanation:**

You need one metric alert rule to produce the CPU signals at the VMSS scope with the required window (10m) and frequency (1m) (A). To handle weekly quiet time, configure an alert processing rule (Suppression) for the Prod resource group with the exact schedule; this silences any alerts that would fire during that window without changing the rules themselves (C). Finally, to implement differential routing by severity, use an alert processing rule (Route) that inspects Severity and targets the appropriate action group (Sev0/Sev1 ? AG-P1 for SMS/Teams; Sev2+ ? AG-P2 for email) (E). This trio yields correct signal creation, calendar-based suppression, and policy-driven delivery.‘
Why the other options are incorrect
B: Collapsing action groups removes the ability to route by severity to different destinations.
D: Dynamic thresholds can be useful but dont implement the explicit &gt;80%/10m or severity-based routing requirements.
F: Auto resolve/Smart Groups affect incident lifecycle/grouping, not scheduled suppression or severity-based routing to different actions.

---

### Question 45

Scenario
A Standard internal Load Balancer on TCP 443 isnt distributing traffic; only one VM is hit. Use Azure-native tools to verify path, backend health, and NSG rules before touching app code. NSG is on the subnet.
Select THREE actions that together isolate the issue correctly.

**Options:**

- **A.** A. Change LB SKU to Basic
- **B.** B. Check Backend health and probe status per NIC ✅
- **C.** C. Ensure NSG allows AzureLoadBalancer to the probe port ✅
- **D.** D. Disable the NSG entirely
- **E.** E. Verify each VM listens/responds on the probe endpoint (e.g., TCP 443 or specific HTTP path) ✅
- **F.** F. Use Connection troubleshoot to the LB private IP:443

**Correct answer:** B, C, E

**Explanation:**

When a Standard LB sends traffic to only one VM, the usual cause is that the others are Unhealthy. Start in the LBs Backend health blade to inspect each backend NIC: it shows real-time probe status and often a textual reason (timeout, connection refused, wrong HTTP code/path). If a backend is Unhealthy, it wont receive flows, even if the app is up on another port. Next, confirm your NSG allows the AzureLoadBalancer service tag to the probe port. A custom deny that overrides defaults will silently block probes and make instances Unhealthy. Finally, validate that each VM actually listens and responds on the probe endpoint you configured. For a TCP probe, ensure the service returns SYN-ACK on 443; for an HTTP probe, confirm the exact path returns a 200 OK (not a redirect/403/health-off response). Only when probes pass will the LB include that backend in the distribution set.
Why the other options are incorrect
A: Downgrading to Basic removes features and doesnt address misconfigured probes, closed ports, or NSG blocks.
D: Disabling the NSG is a blunt instrument that hides the root cause and violates change control; precise allow rules are the right fix.
F: Connection troubleshoot validates end-to-end reachability to the frontend IP:port, but it does not tell you why specific backends are excluded. Probe health is what drives per-instance inclusion.

---
