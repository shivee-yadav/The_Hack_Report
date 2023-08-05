import  iconBugBounty from "../../assets/icon-bug-bounty.svg" ;
import  iconAttack from "../../assets/icon-attack-surface-management.svg" ;
import  iconPenTest from "../../assets/icon-penetration-testing.svg" ;
import  iconVulnerability from "../../assets/icon-vulnerability-disclosure.svg" ;
export const productList = [
    {
      id: 1,
      img: <img src={iconBugBounty} alt="bug-bounty" />,
      heading: "Bug Bounty" ,
      text: "Continuously find hidden flaws by collaborating with security researchers matched to your precise needs."
    },
    {
      id: 2,
      img: <img src={iconPenTest} alt="bug-bounty" />,
      heading: "Pen Test as a Service" ,
      text: "Configure pen tests rapidly launch in days and see high impact results from elite teams in real time."
    },
    {
      id: 3,
      img: <img src={iconVulnerability} alt="bug-bounty" />,
      heading: "Vulnerability Disclosure" ,
      text: "Prove you do everything possible to protect takeholders by accepting vulnerability reports from the public."
    },
    {
      id: 4,
      img: <img src={iconAttack} alt="bug-bounty" />,
      heading: "Attack Surface Management" ,
      text: "Discover and analyse asset risks, relying on security researcher ingenuity to find them before attackers."
    }
  ]