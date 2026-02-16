# Code-to-Cloud Deployment Instructions

**Copy and paste this prompt when starting ANY Opsera deployment:**

---

## CRITICAL: Do NOT Make Assumptions

Before generating ANY Kubernetes manifests, you MUST:

1. **Ask me explicitly** which ingress pattern to use:
   - ACM wildcard certificate (opsera tenant)
   - cert-manager + Let's Encrypt
   - Other

2. **Show me the pattern** you will use BEFORE generating files

3. **Wait for my confirmation** before proceeding

## For Opsera Tenant (tenant=opsera, domain=agent.opsera.dev)

**MUST use this EXACT ingress pattern (RULE 107):**

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: {app}
  namespace: {namespace}
  labels:
    app: {app}
    environment: {env}
    tenant: opsera
  annotations:
    nginx.ingress.kubernetes.io/force-ssl-redirect: "false"  # REQUIRED
spec:
  ingressClassName: nginx
  # NO TLS section - ACM handles HTTPS at NLB level
  rules:
  - host: opsera-{app}-{env}.agent.opsera.dev
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: {app}
            port:
              number: 80
```

## Validation Checklist

Before generating ingress.yaml, confirm:
- [ ] Tenant name?
- [ ] Domain name?
- [ ] Certificate method?
- [ ] Required annotations included?
- [ ] NO assumptions made?

## What NOT to Include for Opsera Tenant

❌ `cert-manager.io/cluster-issuer` annotation
❌ `nginx.ingress.kubernetes.io/ssl-redirect` annotation (use `force-ssl-redirect` instead)
❌ `spec.tls` section
❌ Any TLS-related configurations

## What MUST Include for Opsera Tenant

✅ `nginx.ingress.kubernetes.io/force-ssl-redirect: "false"` annotation
✅ `ingressClassName: nginx`
✅ Host: `opsera-{app}-{env}.agent.opsera.dev` format
✅ NO TLS section

---

**Remember: CONFIRM THE PATTERN WITH ME BEFORE GENERATING FILES**
