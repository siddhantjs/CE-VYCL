**VYCL**

**Website Gap Analysis**

*What is missing   what is needed   exact fixes*

Fresh fetch: vycl.vercel.app  ·  May 27, 2026

|<p>**2**</p><p>Critical bugs</p>|<p>**4**</p><p>Sections missing</p>|<p>**10**</p><p>Sections partial</p>|<p>**9**</p><p>Pages missing</p>|
| :- | :- | :- | :- |

This document was generated from a live fetch of vycl.vercel.app. It records every gap between what is published and what the site needs   across the homepage, missing pages, legal pages, and technical/SEO gaps   and provides the exact content required to fill each one.
# **Part 1   Homepage Gaps**
*Status key:  ✗ MISSING = does not exist  |  ⚠ CRITICAL = exists but broken  |  ~ PARTIAL = exists but wrong  |  ✓ DONE = correct*

|**Section**|**What is live now**|**Status**|**What is needed**|
| :- | :- | :- | :- |
|**Navigation**|Home / About / Services / Contact anchors only. No links to secondary pages.|**~  PARTIAL**|Add nav links: /services, /programs, /dealer-groups, /lenders, /platforms, /fleet-operators|
|**Hero   eyebrow**|"Vehicle Subscription Consulting"|**~  PARTIAL**|Change to "Vehicle Subscription Consultancy"   SEO keyword difference|
|**Hero   headline (H1)**|"Connecting the Dots to Vehicle Subscription"|**✗  MISSING**|"The only consultancy built for the subscription economy."|
|**Hero   subheadline**|Generic one-liner with no specifics|**~  PARTIAL**|Write copy naming all Six Pillars and national growth trajectory|
|**Hero   CTA buttons**|"Get Started" / "Explore Services"|**~  PARTIAL**|"Let's Connect" → contact  |  "Explore the Six Pillars" → pillars section|
|**Hero   image**|Single car in a showroom (Unsplash stock)|**✗  MISSING**|Replace: aerial city / organised fleet / glass office building. Dark overlay for contrast. NOT a single showroom car.|
|**Stats bar   render bug**|All three stats display as "0+"   no numbers visible|**⚠  CRITICAL**|Fix JS/CSS counter animation. Correct values: 800+ vehicles | 45 days | 10+ years|
|**Why VYCL (S4)**|Body copy present but closing paragraph is weak and generic|**~  PARTIAL**|Rewrite closing para with authority language referencing 800+ deployments and national expansion|
|**Who We Serve (S5)**|Four-card grid present with correct audience labels and proof points|**✓  DONE**|  No change needed|
|**Partner ecosystem   KEYVO block**|Does not exist anywhere on page|**✗  MISSING**|Full-width teal block: KEYVO logo, "Founded by Ryan Yamauchi" label, underwriting platform description|
|**Partner ecosystem   14 partner cards**|Decorative hub diagram only. No partner names, logos, or descriptions.|**✗  MISSING**|Build 14 cards with logo, name, relationship type, and 1-sentence description for each partner|
|**Six Pillars copy (S7)**|Six cards exist. Headings and copy are generic. No partner names woven in.|**~  PARTIAL**|Replace all six pillar descriptions. Reference: JRNY, Axle, PLUG, AVIS/Budget, MiaVita, KEYVO|
|**FlexRide stats   render bug**|"0 days" / "$0" / "Secured"   first stat shows as 0 not 45|**⚠  CRITICAL**|Same bug as stats bar. Fix counter. Correct: 45 days | $0 headcount | Secured (Westlake/CULA)|
|**FlexRide case study copy**|Body copy and Visit link are correct|**✓  DONE**|  Only stats fix needed (above)|
|**Founder bio (S9)**|Headshot present. Bio shortened and missing three key credentials.|**~  PARTIAL**|Add: KEYVO co-founder | NYP LLC co-founder | Head of Sales North America   Tomorrow's Journey|
|**Testimonials (S10)**|Three quotes shown. Carousel markup duplicates all three   six entries visible in HTML.|**~  PARTIAL**|Deduplicate carousel. Verify wording matches exact LinkedIn quotes for Chinn, Chandy, Grossman.|
|**Contact   headline**|"Got Questions? We've Got Answers."|**~  PARTIAL**|"Ready to build your subscription program?"|
|**Contact   form fields**|Name / Email / Message only|**~  PARTIAL**|Add: Company / Organisation field  +  "What best describes you?" dropdown (Dealer Group | Lender | SaaS Platform | OEM or Fleet | Other)|
|**Contact   Calendly embed**|Section heading references scheduling a call but no widget exists|**✗  MISSING**|Embed Calendly widget: calendly.com/vycl/30min     or QR code in teal on white card|
|**Footer**|© 2026 VYCL LLC  ·  vycl.ai  ·  Hawaii-based. Operating nationally.|**✓  DONE**|  Correct|
# **Part 2   Missing Pages**
None of the pages below exist. The contact form already links to /privacy and /terms   both return 404. Every other page below is referenced in the site's value proposition but has no URL.

|**Page / URL**|**Priority**|**What it must contain**|
| :- | :- | :- |
|**/services**|**HIGH**|Three engagement tiers: Advisory | Implementation | Ongoing Partnership. Each: description, best-for audience, named partners, CTA button to Calendly.|
|**/programs**|**HIGH**|FlexRide by King featured block (full partner stack, 45-day stat, live status badge). Central Florida "Coming Soon" card. CTA.|
|**/dealer-groups**|**HIGH**|Audience page: headline, proof points, KEYVO + JRNY + Axle integration description, testimonials, CTA.|
|**/lenders**|**MED**|Lending structure page: KEYVO underwriting platform, Westlake/CULA facility proof, Axle compliance, CTA.|
|**/platforms**|**MED**|SaaS / TJ exclusive page: US market entry framing, exclusive TJ/JRNY licensing, live dealer reference, CTA.|
|**/fleet-operators**|**MED**|Fleet page: PLUG + AVIS/Budget inventory access, Rivian EV Hawaii proof, Axle + KEYVO integration, CTA.|
|**Custom 404**|**MED**|On-brand dark page. Headline: "This page does not exist   but your subscription program can." Two buttons: Back to Home | Schedule a Call.|
|**/privacy**|**HIGH**|LEGAL REQUIREMENT   contact form links here and page 404s. Sections: data collected | use | sharing | retention | rights | contact. VYCL LLC entity, Hawaii governing law.|
|**/terms**|**HIGH**|LEGAL REQUIREMENT   contact form links here and page 404s. Sections: site use | IP (Six Pillars proprietary) | disclaimers | liability limit | governing law (Hawaii).|
# **Part 3   SEO & Technical Gaps**

|**Item**|**Status**|**Fix required**|
| :- | :- | :- |
|**Image alt text (19 images)**|**~  PARTIAL**|Most alt text is generic (e.g. "Modern vehicle in showroom"). Every image needs a keyword-specific description referencing VYCL, vehicle subscription, Hawaii, or the specific partner shown.|
|**Open Graph / social meta**|**~  PARTIAL**|Basic meta title/description exist. Missing: og:image, og:type, og:url, twitter:card, twitter:image. Without these, link shares on LinkedIn and Twitter show no preview card.|
|**Structured data (JSON-LD)**|**✗  MISSING**|No schema markup detected. Add: LocalBusiness (VYCL LLC, Hawaii) + Person (Ryan Yamauchi, Founder). Increases eligibility for Google Knowledge Panel.|
|**sitemap.xml**|**✗  MISSING**|No sitemap found. Required once secondary pages are added. Submit to Google Search Console after creation.|
|**robots.txt**|**✗  MISSING**|Not confirmed present. Should exist at /robots.txt and reference the sitemap URL.|
|**Canonical tags**|**~  PARTIAL**|Canonical not confirmed on all pages. Add rel=canonical to every page to prevent duplicate-content issues between vycl.vercel.app and the eventual vycl.ai domain.|
|**Page load   counter animation**|**⚠  CRITICAL**|The number counter animation for all stat blocks fails to run   all values remain at 0. This is the most visible technical bug on the site. Root cause: likely an Intersection Observer not firing or JS error on mount.|
|**Testimonial carousel duplication**|**~  PARTIAL**|The carousel markup contains 6 testimonial entries (3 duplicated). Deduplication needed   only 3 unique quotes exist.|
|**Form submission handler**|**✗  MISSING**|Contact form has no confirmed backend endpoint. Verify the form POSTs successfully. Add user-facing confirmation message on submit.|
|**Mailing list subscribe**|**✗  MISSING**|Subscribe field in footer has no visible form action or provider integration. Connect to an email service (Mailchimp / ConvertKit / etc.) before promoting.|
# **Part 4   Exact Content for Every Fix**
*Copy-paste ready. No interpretation needed. Execute in section order.*
## **4.1  Fix the stats render bug first**
All stat counters display 0. This is the most damaging visible error   the primary proof points of the entire site are invisible. Fix before any copy changes.

|**S3   Stat 1**|800+  |  label: "Vehicles subscribed in Hawaii"|
| :- | :- |
|**S3   Stat 2**|45  |  label: "Days from idea to live program"|
|**S3   Stat 3**|10+  |  label: "Years of subscription-first experience"|
|**S8   Stat 1**|45  |  label: "Days from concept to live"|
|**S8   Stat 2**|$0  |  label: "Incremental headcount required"|
|**S8   Stat 3**|Secured  |  label: "Institutional lending facility (Westlake / CULA)"|
|**Root cause**|Intersection Observer or counter JS likely not mounting correctly. Check browser console for errors on scroll to those sections.|
## **4.2  Hero section   replace everything**

|**Eyebrow**|Vehicle Subscription Consultancy|
| :- | :- |
|**H1 headline**|The only consultancy built for the subscription economy.|
|**Subheadline**|From first program to 100+ rooftops   VYCL connects the dots across inventory, lending, technology, marketing, insurance, and operations so your program actually launches and scales.|
|**Button 1**|Let's Connect  →  scrolls to #contact|
|**Button 2**|Explore the Six Pillars  →  scrolls to #pillars|
|**Hero image**|Replace with: aerial city intersection at night with light trails  OR  organised vehicle fleet from above  OR  modern glass-and-steel building exterior. Apply dark gradient overlay so white text reads clearly. Do NOT use a single showroom car.|
|**Image alt**|Vehicle subscription consultancy   VYCL strategic advisory for dealer groups, lenders, and SaaS platforms|
## **4.3  Why VYCL   rewrite closing paragraph**
Keep existing first two paragraphs. Replace the closing paragraph with:

"Whether you are launching your first subscription program or scaling an existing one across multiple rooftops, VYCL brings a level of specificity   in lending structure, platform knowledge, insurance compliance, and inventory sourcing   that no generalist automotive consultancy can match."
## **4.4  KEYVO featured block   build from scratch**
Place immediately above the 14-partner card grid. Full-width. Teal background (#0F6E56 at 10% opacity or solid teal strip).

|**Label above logo**|FOUNDED BY RYAN YAMAUCHI|
| :- | :- |
|**Logo**|KEYVO (black/green chevron mark + KEYVO wordmark)|
|**Subheading**|The subscription industry's only underwriting platform|
|**Body copy**|KEYVO is the only underwriting platform purpose-built for vehicle subscription   usable by both dealers and lenders. As co-founder, Ryan brings VYCL clients direct access to infrastructure that no other consultancy in this space can offer: a live, production-grade underwriting system that de-risks subscriber approval and gives lenders the structured data they need to fund subscription portfolios with confidence.|
|**CTA link**|Learn more about KEYVO  →  (link to KEYVO site when available)|
## **4.5  Partner cards   all 14 with exact copy**
Three-column grid below the KEYVO block. Each card: logo, name, relationship label in teal, one-sentence description.

|**Partner name**|**Relationship label**|**Description (one sentence)**|
| :- | :- | :- |
|**Tomorrow's Journey / JRNY**|Exclusive US Licensing Partner|VYCL is the exclusive US licensing partner for Tomorrow's Journey and their JRNY platform   the operating backbone of active subscription programs across our dealer network.|
|**Axle**|Insurance Verification Partner|Insurance verification for VYCL dealer and lender partners is powered by Axle   providing real-time compliance tracking and bulk subscriber onboarding across multi-rooftop operations.|
|**PLUG**|EV Inventory & Referral Partner|VYCL actively deploys the PLUG platform to help dealer clients build pre-owned EV subscription inventory   sourcing vehicles that are fleet-ready from day one.|
|**AVIS / Budget**|Wholesale Inventory Partner|VYCL has direct access to the AVIS/Budget wholesale channel   enabling dealer partners to source fleet-ready vehicles at scale for subscription program inventory buildout.|
|**MiaVita Solutions**|Digital Marketing Partner|VYCL's referral partner for digital marketing   MiaVita brings deep experience in automotive and vehicle subscription marketing, delivering targeted campaigns and subscriber acquisition.|
|**NYP, LLC**|Founding Operating Entity|NYP, LLC (Niethammer Yamauchi Platform) is the founding operating entity co-created by Ryan Yamauchi and Mike Niethammer of King Auto Group   the structure that powers FlexRide by King.|
|**Westlake Financial**|Institutional Lending Partner|VYCL has structured and closed a fleet lending facility with Westlake Financial, backing the FlexRide by King subscription program in Hawaii.|
|**CULA**|Credit Union Lending Partner|CULA (Credit Union Leasing of America) is the credit union-side lending partner on the Westlake facility   expanding lender optionality for subscription portfolios.|
|**FlexRide by King**|Operating Program|FlexRide by King is Hawaii's most active vehicle subscription program   the live proof-of-concept built and operated by VYCL across King Auto Group rooftops.|
|**King Auto Group**|Operating Client|King Auto Group is a VYCL operating client and the dealer group behind the FlexRide by King subscription program, operated through NYP, LLC across their Hawaii rooftops.|
|**King Windward Nissan**|Operating Client   Rooftop|King Windward Nissan is an active VYCL operating client rooftop   one of the King Auto Group dealerships running FlexRide by King in Hawaii.|
|**Infiniti of Honolulu**|Operating Client   Rooftop|Infiniti of Honolulu is an active VYCL operating client rooftop   a King Auto Group dealership running the FlexRide by King subscription program in Hawaii.|
|**P2P Fleet**|Operating Client|P2P Fleet is a VYCL operating client leveraging the vehicle subscription model to scale inventory and generate recurring revenue through the subscription economy.|
|**Turo**|Referral Partner|VYCL works with Turo hosts and fleet operators looking to transition from or expand beyond peer-to-peer rental into structured vehicle subscription programs.|
## **4.6  Six Pillars   replace all copy**

|**01  Lending**|The right financing structure is what separates a program that launches from one that lasts. VYCL has structured facilities with Westlake Financial and CULA, and knows how to build a lender-ready case from scratch.|
| :- | :- |
|**02  Inventory Management**|Subscription programs live or die by how well inventory moves. VYCL's strategies are backed by direct wholesale access to AVIS/Budget fleet vehicles and pre-owned EV sourcing through PLUG   reducing carrying costs and accelerating launch.|
|**03  Marketing**|Subscription is a different sell than a purchase or lease. VYCL builds and executes targeted strategies that educate the market and drive conversions   with digital execution delivered through MiaVita Solutions.|
|**04  Insurance**|Insurance is one of the most consequential components of a subscription program. VYCL structures programs that protect fleet assets and satisfy lender requirements   with insurance verification powered by Axle across every subscriber and every rooftop.|
|**05  Technology**|As the exclusive US licensing partner for Tomorrow's Journey, VYCL has deep implementation expertise in JRNY   and knows how to configure, integrate, and optimise it for your rooftop.|
|**06  Operations**|Where programs succeed or fail silently. VYCL designs the workflows, staffing models, and process infrastructure that keep your program running without adding unnecessary overhead.|
## **4.7  Founder bio   full replacement text**
**Para 1:**

Ryan Yamauchi has spent over a decade building, operating, and scaling vehicle subscription programs   starting with Hawaii's boutique dealership market and expanding to national platform development, institutional lending, and multi-rooftop dealer strategy.

**Para 2:**

He served as VP of Operations at AutoSource Hawaii and Director of Strategic Planning at the nation's first direct-to-consumer vehicle subscription company. Today he is the founder of VYCL, co-founder of KEYVO   the subscription industry's only underwriting platform for dealers and lenders   co-founder of NYP LLC (the operating entity behind FlexRide by King), and the exclusive Head of Sales North America for Tomorrow's Journey, the UK-based SaaS company whose JRNY platform powers subscription programs across the US.

**Para 3:**

His Six Pillars framework has guided over 800 vehicle deployments and is the operating foundation for active programs in Hawaii with national expansion underway.

**Credentials list:**

- Co-founder, KEYVO   the subscription industry's only dealer and lender underwriting platform
- Exclusive Head of Sales North America   Tomorrow's Journey / JRNY
- Co-founder, NYP LLC   operating entity, FlexRide by King
- Structured institutional lending facility   Westlake Financial / CULA
- Former VP of Operations   AutoSource Hawaii
- Former Director of Strategic Planning   nation's first DTC vehicle subscription company
## **4.8  Contact section   replace headline, add fields, add Calendly**

|**Section headline**|Ready to build your subscription program?|
| :- | :- |
|**Subheadline**|Whether you are a dealer group, lender, SaaS platform, or fleet operator   VYCL has a lane for you. Tell us where you are and where you want to go.|
|**Form field   add 1**|Company / Organisation  (text input, required)|
|**Form field   add 2**|"What best describes you?" dropdown: Dealer Group | Lender | SaaS Platform | OEM or Fleet Operator | Other|
|**Calendar heading**|Or schedule a call directly.|
|**Calendar subhead**|30 minutes. No pitch deck required. Just a conversation about where subscription fits in your business.|
|**Calendly embed**|Inline widget at calendly.com/vycl/30min    OR display teal QR code linking to that URL if inline embed is not possible|
# **Part 5   Missing Pages: Full Content Briefs**
*Every page below needs to be built. Each brief contains the URL, SEO metadata, all headlines, body copy, and CTA   ready for direct developer handoff.*
## **Page 1   /services**

|**URL**|vycl.ai/services|
| :- | :- |
|**Page title**|VYCL Services   Vehicle Subscription Advisory, Implementation & Partnership|
|**Meta desc**|VYCL offers three engagement models for dealer groups, lenders, SaaS platforms, and fleet operators: Advisory, Implementation, and Ongoing Partnership.|
|**H1**|How VYCL Works|
|**Subhead**|Vehicle subscription is not one problem   it's six. VYCL solves all of them, in whatever combination your business needs.|

### **Engagement Tier 1   Advisory**
Strategic guidance for organisations at the evaluation stage. Market assessment, program design, partner identification, and go/no-go recommendation.

- Best for: OEMs, lenders, and SaaS platforms exploring the US subscription market
- Partners involved: KEYVO underwriting assessment, JRNY platform evaluation, Axle compliance review

### **Engagement Tier 2   Implementation**
Hands-on buildout from concept to launch. All Six Pillars covered.

- JRNY platform configuration (exclusive US licensing partner)
- Lender engagement   Westlake Financial / CULA facility structure
- Axle insurance verification integration
- Inventory sourcing   AVIS/Budget wholesale + PLUG EV platform
- Digital marketing launch via MiaVita Solutions
- Operational design   staffing model, workflow, subscriber onboarding
- Best for: dealer groups launching their first or second rooftop

### **Engagement Tier 3   Ongoing Partnership**
Embedded strategic and operational support for programs already running. Performance review, lender relationship management, platform optimisation, and national expansion planning.

- Best for: multi-rooftop operators scaling beyond their home market

|**CTA headline**|Not sure which engagement fits?|
| :- | :- |
|**CTA body**|Every conversation starts the same way   30 minutes, no agenda except understanding where you are and where you want to go.|
|**CTA button**|Schedule a Call  →  calendly.com/vycl/30min|
## **Page 2   /programs**

|**URL**|vycl.ai/programs|
| :- | :- |
|**Page title**|VYCL Active Programs   Vehicle Subscription in Hawaii and Beyond|
|**Meta desc**|VYCL has built and operates Hawaii's most active vehicle subscription program. See FlexRide by King and what's coming next.|
|**H1**|Programs built. Programs running.|
|**Subhead**|The Six Pillars framework isn't theoretical. These are the programs where it runs.|

### **FlexRide by King   Hawaii (Featured, Live)**
- Platform: Tomorrow's Journey / JRNY
- Insurance verification: Axle
- Lender: Westlake Financial / CULA
- Operating entity: NYP LLC (Niethammer Yamauchi Platform)
- Rooftops: King Windward Nissan · Infiniti of Honolulu (King Auto Group)
- Launch: 45 days from concept to live · Zero incremental headcount

### **Central Florida   Coming Soon**
VYCL is actively developing its next market engagement in Central Florida. Details to follow.

|**CTA**|Interested in launching in your market?  →  Schedule a Call  →  calendly.com/vycl/30min|
| :- | :- |
## **Page 3   /dealer-groups**

|**URL**|vycl.ai/dealer-groups|
| :- | :- |
|**Page title**|Vehicle Subscription for Dealer Groups   VYCL|
|**Meta desc**|Launch and scale a vehicle subscription program on your existing rooftops without adding headcount. VYCL handles the playbook, the partners, and the launch.|
|**Keywords**|dealer subscription program, franchise dealer subscription, dealership recurring revenue, KEYVO subscription underwriting, multi-rooftop subscription|
|**H1**|Your dealership, running subscription. Without rebuilding from scratch.|
|**Body**|Most programs fail not because the model is wrong, but because the implementation is. VYCL handles the platform, the lender, insurance compliance, and inventory before you go live   so the program works on day one.|

**Proof points:**

- FlexRide by King: 45-day launch, zero headcount, institutional lending secured
- KEYVO underwriting   the only subscription-native subscriber approval tool available to dealers
- JRNY platform   configured and optimised as exclusive US licensing partner
- Axle   real-time insurance compliance across every subscriber
- MiaVita Solutions   automotive and subscription-specialist digital marketing

|**CTA headline**|Ready to add subscription to your rooftop?|
| :- | :- |
|**CTA button**|Schedule a Call  →  calendly.com/vycl/30min|
## **Page 4   /lenders**

|**URL**|vycl.ai/lenders|
| :- | :- |
|**Page title**|Vehicle Subscription Lending   VYCL Structures Subscription Portfolios|
|**Meta desc**|VYCL helps lenders structure fleet-based subscription lending facilities with proper collateral, cash-flow modelling, and KEYVO subscriber underwriting.|
|**Keywords**|vehicle subscription lending facility, subscription fleet financing, subscription underwriting platform, KEYVO, credit union auto subscription, fleet loan facility|
|**H1**|Vehicle subscription lending is a different asset class. We help you structure it correctly.|
|**Body**|Traditional auto lending structures do not map cleanly onto subscription fleet portfolios. VYCL works with lenders to build the right facility structure, underwriting criteria, and monitoring framework. Subscriber-level insurance compliance is managed in real time through Axle. Subscriber underwriting is powered by KEYVO   the only platform built specifically for subscription portfolio risk.|

**Proof points:**

- Structured and closed a lending facility with Westlake Financial / CULA for FlexRide by King
- KEYVO underwriting platform   purpose-built for subscription portfolios
- Axle-powered insurance verification   subscriber-level compliance reducing lender exposure

|**Featured partners**|KEYVO  ·  Westlake Financial  ·  CULA  ·  Axle|
| :- | :- |
|**CTA headline**|Evaluating subscription as a lending category?|
|**CTA button**|Schedule a Call  →  calendly.com/vycl/30min|
## **Page 5   /platforms**

|**URL**|vycl.ai/platforms|
| :- | :- |
|**Page title**|Automotive SaaS US Market Entry   VYCL Platform Partnership|
|**Meta desc**|VYCL is the exclusive US licensing partner for Tomorrow's Journey / JRNY. We bridge automotive SaaS platforms to US dealer networks with proven go-to-market execution.|
|**Keywords**|automotive SaaS US market entry, JRNY platform dealer setup, Tomorrow's Journey US dealer, dealer onboarding subscription software, automotive SaaS licensing partner US|
|**H1**|Your platform needs US dealers. We know how to get them.|
|**Body**|As the exclusive US licensing partner for Tomorrow's Journey, VYCL knows the dealer conversation, knows what proof they need, and knows how to turn a demo into a signed agreement backed by a live reference program.|

**Proof points:**

- Exclusive US Licensing Partner   Tomorrow's Journey / JRNY
- Active dealer BD pipeline across multiple US markets
- Live proof-of-concept rooftop   the strongest sales tool in any platform conversation

|**CTA headline**|Looking for a US market entry partner?|
| :- | :- |
|**CTA button**|Schedule a Call  →  calendly.com/vycl/30min|
## **Page 6   /fleet-operators**

|**URL**|vycl.ai/fleet-operators|
| :- | :- |
|**Page title**|Fleet Subscription Consulting   VYCL Fleet Operator Strategy|
|**Meta desc**|VYCL designs branded subscription programs for fleet operators and OEMs   from fleet composition through subscriber experience, backed by PLUG, AVIS/Budget, Axle, and KEYVO.|
|**Keywords**|fleet operator subscription consulting, EV fleet subscription program, AVIS Budget wholesale dealer inventory, PLUG EV platform, fleet rental to subscription transition|
|**H1**|Your fleet. Subscribed. Profitable.|
|**Body**|Fleet-based subscription programs need a fundamentally different structure. VYCL has direct access to the AVIS/Budget wholesale channel for fleet-ready inventory, pre-owned EV sourcing through PLUG, insurance verification through Axle, and subscriber underwriting through KEYVO   all integrated into a program designed for fleet-scale operations.|

**Proof points:**

- EV fleet subscription structure developed for a 20-unit Rivian program in Hawaii
- Direct AVIS/Budget wholesale access for fleet inventory at scale
- PLUG EV platform for pre-owned EV inventory sourcing
- Axle insurance verification for fleet-level compliance
- KEYVO underwriting   purpose-built for subscription portfolio risk

|**CTA headline**|Ready to put your fleet to work?|
| :- | :- |
|**CTA button**|Schedule a Call  →  calendly.com/vycl/30min|
## **Page 7   Custom 404**

|**Design**|Dark background matching hero. Teal accent colour. Minimal   no images. Feels on-brand, not generic server error.|
| :- | :- |
|**Headline**|This page does not exist   but your subscription program can.|
|**Body**|Looks like that link is broken. Head back to the homepage or go straight to scheduling a call.|
|**Button 1**|Back to Home  →  /|
|**Button 2**|Schedule a Call  →  calendly.com/vycl/30min|
## **Page 8   Privacy Policy (/privacy)**
LEGAL REQUIREMENT. The contact form currently links to this page and it returns a 404. Engage a lawyer for the final version. Minimum required sections:

- Section 1: Information collected   name, email, company, message via contact form; email address via mailing list subscribe
- Section 2: How we use it   to respond to inquiries; to send industry updates if subscribed
- Section 3: Who we share it with   not sold; tools used include Calendly, email service provider
- Section 4: Data retention   retained until deletion requested
- Section 5: Your rights   request deletion, opt out of mailing list at any time
- Section 6: Contact   privacy@vycl.ai or contact form
- Footer line: Last updated [date] · VYCL LLC · Governed by the laws of the State of Hawaii
## **Page 9   Terms of Service (/terms)**
LEGAL REQUIREMENT. Same situation as Privacy Policy   linked from form, returns 404. Minimum sections:

- Section 1: Use of site   informational only; not a contract for consulting services
- Section 2: Intellectual property   all content owned by VYCL LLC; Six Pillars framework is proprietary
- Section 3: Disclaimers   site content is not legal or financial advice
- Section 4: Limitation of liability   standard B2B consultancy limitation
- Section 5: Governing law   State of Hawaii
- Footer line: Last updated [date] · VYCL LLC
# **Part 6   Execution Order**
*Ordered by impact per hour of effort. Fix the two critical bugs first   they are the most visible problems on the site.*

|**#**|**Task**|**Effort**|**Why this order**|
| :- | :- | :- | :- |
|**1**|Fix stats render bug   S3 and S8 (all values show as 0)|30 min|Most visible error. Primary proof points are invisible.|
|**2**|Replace hero headline, subheadline, and CTA buttons|15 min|First thing every visitor sees   highest ROI copy change.|
|**3**|Replace hero image|30 min|Single showroom car contradicts C-suite consultancy positioning.|
|**4**|Build KEYVO elevated block + all 14 partner cards|3–4 hrs|Largest visible gap on homepage. Partner ecosystem is the key differentiator.|
|**5**|Replace all Six Pillars copy with partner-specific versions|1 hr|Current copy is generic; partner references prove depth of capability.|
|**6**|Replace founder bio with full three-paragraph version + credential list|20 min|Missing KEYVO, NYP LLC, and TJ Head of Sales NA   all critical credentials.|
|**7**|Fix contact headline + add form fields + embed Calendly|1 hr|Primary conversion endpoint. Currently incomplete on three dimensions.|
|**8**|Fix testimonial carousel duplication (6 entries → 3)|20 min|Broken markup. Quick fix.|
|**9**|Build /privacy and /terms pages|1 hr|Legal requirement   form links to both and they 404.|
|**10**|Build /services page|2 hrs|Primary conversion page. Referenced from homepage.|
|**11**|Build /programs page|1\.5 hrs|Adds depth to FlexRide case study and national expansion story.|
|**12**|Build /dealer-groups page|1\.5 hrs|Highest-volume audience segment.|
|**13**|Build /lenders page|1\.5 hrs|KEYVO and lending facility story deserves standalone treatment.|
|**14**|Build /platforms page|1 hr|TJ exclusive relationship deserves its own page.|
|**15**|Build /fleet-operators page|1 hr|Captures Turo/P2P Fleet transition audience.|
|**16**|Build custom 404 page|30 min|Low effort, fixes dead-end UX.|
|**17**|Update nav with links to all secondary pages|30 min|Required once pages are built.|
|**18**|Fix all 19 image alt text strings|45 min|Free SEO   every image is an indexable keyword signal.|
|**19**|Add JSON-LD structured data (LocalBusiness + Person)|1 hr|Google Knowledge Panel eligibility. One-time setup.|
|**20**|Add Open Graph and Twitter card meta tags|30 min|LinkedIn and Twitter link previews currently show nothing.|
|**21**|Create sitemap.xml and robots.txt|30 min|Required for Google Search Console submission.|
|**22**|Connect mailing list subscribe field to email provider|1 hr|Currently no backend. Dead CTA in footer.|
|**23**|Verify contact form POST endpoint and add confirmation state|30 min|Unknown if form currently submits successfully.|


*VYCL LLC  ·  vycl.ai  ·  Website Gap Analysis  ·  Fetched May 27 2026  ·  For developer and design handoff*
