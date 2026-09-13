import placeholderImg from "@/assets/credential-placeholder.jpg";
import diplomaAsset from "@/assets/BachelorsDegree.png";
import awsCloudPractitionerAsset from "@/assets/aws-cloud-practitioner-cert.jpg";

export const credentialPlaceholder = placeholderImg;

export type CredentialType =
  | "degree"
  | "certification"
  | "badge"
  | "training"
  | "license";

export type CredentialStatus = "active" | "in-progress" | "expired";

export type Credential = {
  id: string;
  title: string;
  issuer: string;
  type: CredentialType;
  image?: string;
  logo?: string;
  issueDate?: string;
  expirationDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  status: CredentialStatus;
  featured?: boolean;
  description?: string;
};

export const credentialTypeLabels: Record<CredentialType, string> = {
  degree: "Degree",
  certification: "Certification",
  badge: "Badge",
  training: "Training",
  license: "License",
};

export const credentialFilters: {
  key: "all" | CredentialType;
  label: string;
}[] = [
  { key: "all", label: "All" },
  { key: "degree", label: "Degrees" },
  { key: "certification", label: "Certifications" },
  { key: "badge", label: "Badges" },
  { key: "training", label: "Training" },
  { key: "license", label: "Licenses" },
];

export const credentials: Credential[] = [
  {
    id: "auburn-bs-cs",
    title: "Bachelor of Science in Computer Science",
    issuer: "Auburn University",
    type: "degree",
    image: diplomaAsset,
    issueDate: "December 9, 2023",
    credentialId: "24CM-85H4-NVI2",
    verificationUrl: "https://ediploma.auburn.edu/validate/",
    status: "active",
    featured: true,
    description:
      "Undergraduate degree in Computer Science from Auburn University's Samuel Ginn College of Engineering, with foundational coursework in software engineering, algorithms, systems, and security.",
  },
  {
    id: "aws-certified-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    type: "certification",
    image: awsCloudPractitionerAsset,
    issueDate: "September 2, 2026",
    expirationDate: "September 2, 2029",
    credentialId: "ec1c2c850b9144468748ba849a897063",
    verificationUrl: "https://aws.amazon.com/verification",
    status: "active",
    featured: true,
    description:
      "Foundational certification validating cloud fluency and AWS knowledge, including cloud concepts, services, security, architecture, pricing, and support.",
  },
];