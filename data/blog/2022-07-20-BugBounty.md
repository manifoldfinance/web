---
title: Bug Bounty
publishedAt: '2022-07-20'
description: Security and Responsible Disclosure Statement for Bug Bounty
by: sambacha
type: changelog
---

# Security and Responsible Disclosure Statement

## Software Defects

At Manifold Finance Inc, security is a priority. But regardless of how
much effort we put into system security, there may still be
vulnerabilities present. If you discover a vulnerability, we want to
know about it, so we can take steps to address it as quickly as possible.
We would like to ask you to help us better protect our clients and our
systems.

# Defect Response

If you think you have discovered a security issue in any of our
projects, we’d love to hear from you. We will take all security bugs
seriously and if confirmed upon investigation we will patch them within a
reasonable amount of time and release a public security bulletin
discussing the impact and credit the discoverer.

<div class="warning">

-   Attempting to Extort or otherwise force monetary compensation is not
    the best way to receive a bug bounty. If the defect is legitimate we
    will provide compensation so long as any report includes a
    remediation solution only.

-   Remediation includes mitigation solutions, etc.
    It is not strictly a 'fix'

-   We will NOT disclose to other parties, e.g. colleagues at your employer unless you wish us to.

</div>

# Security Bug Handling Process

The process the Operations Security Team will follow when dealing with
security bugs is detailed below:

1.  The person discovering the issue, the reporter, reports the
    vulnerability privately to

`sam@manifoldfinance.com / ops@manifoldfinance.com`

1.  Messages that do not relate to the reporting or managing of an
    undisclosed security vulnerability in our software are ignored and
    no further action is required.

2.  The project team sends an e-mail to the original reporter to
    acknowledge the report within 12 hours.

3.  The project team investigates report and either rejects it or
    accepts it.

4.  If the report is rejected, the project team writes to the reporter
    to explain why.

5.  If the report is accepted, the project team writes to the reporter
    to let them know it is accepted and that they are working on a fix.

6.  The project team requests a CVE number from security at
    manifoldfinance.com by logging a request at:
    <https://github.com/manifoldfinance/defi-threat>

7.  The project team agrees the fix on their private list.

8.  The project team provides the reporter with a copy of the fix and a
    draft vulnerability announcement for comment.

9.  The project team agrees to the fix, the announcement and the release
    schedule with the reporter. The level of detail to include in the
    report is a matter of judgement. Generally, reports should contain
    enough information to enable people to assess the risk associated
    with the vulnerability for their system and no more. Steps to
    reproduce the vulnerability are not normally included.

10. The project team commits the fix. No reference should be made to the
    commit being related to a security vulnerability.

11. The project team creates a release that includes the fix.

12. The project team announces the release. The release announcement
    should be sent to the usual mailing lists (typically the project’s
    user list, dev list, announce list and our public announce list).

13. The project team announces the vulnerability. The vulnerability
    announcement should be sent after the release announcement to the
    following destinations:

14. the same destinations as the release announcement

15. the vulnerability reporter

16. github.com/manifoldfinance/defi-threat

# Format

We utilize MITRE Corporations ATT\\&CK and CVE Process \[CVE Form,
Mitre.org\](<https://cveform.mitre.org/>)

Submissions should be in the following format

``` html
<div class="cveFormatExample">

\[CVEID\]:CVE-2021-0000 \[PRODUCT\]:{$PRODUCT_NAME} \[VERSION\]:0.0.0
\[PROBLEMTYPE\]:Information Disclosure
\[REFERENCES\]:https://github.com/manifoldfinance/\$REPO\[DESCRIPTION\]:

<!-- Description Starts -->
  ...
  <!-- Description Ends -->

</div>
```

## Point of Contract

contact: pgp    
contact: <sam@manifoldfinance.com>   
telegram: @sambacha   


## PGP Keys

link:https://github.com/manifoldfinance/pki/blob/master/7CC9FFB1.asc

    Sam Bacha <sam@manifoldfinance.com> (71BB551C7CC9FFB1)
    Fingerprint: CAC5 FF21 2568 E075 E4C0  024C 71BB 551C 7CC9 FFB1
    KeyId: 7CC9FFB1
    Added on March. 24, 2022

## Well Known

<https://github.com/manifoldfinance/.well-known>
