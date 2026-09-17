## 1. Concept Explained

**What it is:**
A Docker multi-stage build lets you use **one stage to build your app** and a **separate stage to run it**.

The important idea is: **you don't need to put your build tools inside the final image.**

For example, a Node.js app might need TypeScript, npm packages, and build tools to create the production files. But after the app is built, many of those tools are no longer needed.

---

**Why it matters:**
If you put everything into one Docker image, you may ship:

* Source code
* TypeScript
* Development dependencies
* Build tools
* Temporary files
* The actual production app

That makes the image larger and potentially increases the attack surface.

With a multi-stage build, the final image can contain **only what the application needs to run**.

---

**Easy example:**
Think of building a house.

You need hammers, saws, ladders, and other tools while building it.

But when the house is finished, you don't put all those tools inside the house.

**Multi-stage Docker builds work the same way.**

Build with the tools → copy the result → throw the tools away.

---

**Technical example:**

```dockerfile
# Build stage
FROM node:22 AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Production stage
FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
RUN npm ci --omit=dev
CMD ["node", "dist/index.js"]
```

The key line is:

```dockerfile
COPY --from=build /app/dist ./dist
```

It copies the **finished application** from the build stage into the smaller production stage.

---

**Key takeaway:**
**Build with everything you need. Run with only what you need.**

The "80% smaller" result is possible for some projects, but it is **not guaranteed**. The actual reduction depends on the original image and application.

---

## 2. Recommended Video Format

**Format:**
**Talking head + live Dockerfile before/after demonstration**

**Why this format works:**
The hook can show a large Docker image immediately, then you can switch to a tiny Dockerfile example and show the final image size. The visual before/after makes the concept easy to understand without requiring viewers to read lots of code.

---

## 3. 60-Second Script

| Time       | Voice                                                                                                                                                       | Visual                                                                                                                                        | On-screen Text                 |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| **0–5s**   | **"Your Docker image might be huge for a reason you don't need."**                                                                                          | Start with your talking head. Quickly cut to a terminal showing a large image size, then back to you.                                         | **Docker image too big?**      |
| **5–10s**  | **"You may be shipping your entire build environment just to run your app."**                                                                               | Show a Docker image graphic containing: Node, npm, TypeScript, source code, build tools, app.                                                 | **Build tools ≠ Runtime**      |
| **10–20s** | **"Here's the trick: multi-stage builds. One stage builds your app. Another stage runs it."**                                                               | Show a simple animation: **BUILD STAGE → FINAL STAGE**. Build stage has lots of items; final stage has only `dist` + production dependencies. | **Build → Copy → Run**         |
| **20–30s** | **"For example, this first stage installs everything and creates the production files."**                                                                   | Screen recording of the first Dockerfile stage. Highlight `npm ci` and `npm run build`.                                                       | `npm ci` → `npm run build`     |
| **30–40s** | **"Then the second stage starts fresh and copies only the files it actually needs."**                                                                       | Show second `FROM`. Highlight `COPY --from=build /app/dist ./dist`. Visually cross out TypeScript, source files, and build tools.             | **Only what production needs** |
| **40–50s** | **"So instead of shipping the whole workshop, you're shipping the finished product. Depending on your app, that can make the image dramatically smaller."** | Split-screen: **OLD: Build tools + source + app** vs **NEW: Runtime + app**. Show shrinking animation.                                        | **Smaller image 🚀**           |
| **50–56s** | **"And smaller images mean faster pulls, faster deployments, and less stuff to maintain."**                                                                 | Animate Docker image shrinking, then show icons for download → deploy → server.                                                               | **Faster • Smaller • Cleaner** |
| **56–60s** | **"Want the full example? I've linked the complete Docker guide in the description."**                                                                      | Return to talking head. Subtle gesture toward description area.                                                                               | **Full guide ↓ Description**   |

### Spoken script, continuously

> "Your Docker image might be huge for a reason you don't need. You may be shipping your entire build environment just to run your app. Here's the trick: multi-stage builds. One stage builds your app. Another stage runs it. For example, this first stage installs everything and creates the production files. Then the second stage starts fresh and copies only the files it actually needs. So instead of shipping the whole workshop, you're shipping the finished product. Depending on your app, that can make the image dramatically smaller. And smaller images mean faster pulls, faster deployments, and less stuff to maintain. Want the full example? I've linked the complete Docker guide in the description."

---

## 4. Code / Screen Content

Use **only these parts** on screen so viewers don't have to read a huge Dockerfile:

```dockerfile
# Build
FROM node:22 AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Run
FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
RUN npm ci --omit=dev

CMD ["node", "dist/index.js"]
```

### Most important line to highlight

```dockerfile
COPY --from=build /app/dist ./dist
```

Explain it simply:

**"Take the finished files from the build stage and put them into the final image."**

### Visual comparison

Show this briefly:

```text
❌ Single-stage

Source code
+ TypeScript
+ Build tools
+ Dev dependencies
+ Production app
        ↓
     BIG IMAGE
```

Then:

```text
✅ Multi-stage

BUILD STAGE
Everything needed to build
        ↓
   Copy result
        ↓
FINAL IMAGE
Production app
+ Production dependencies
        ↓
   SMALLER IMAGE
```

Avoid showing the entire Dockerfile in the first few seconds. **The visual result should come before the code.**

---

## 5. Recording Notes

* **Hook:** Start on camera, then cut to the large image-size terminal within 1–2 seconds.
* **Camera:** Use a medium close-up for your talking-head sections; keep your face/expression energetic but natural.
* **Code:** Use a large editor font and show only the relevant Dockerfile section.
* **Highlight:** When saying "copies only the files it actually needs," zoom directly into `COPY --from=build`.
* **Animation:** Make the build-stage contents visually disappear when moving into the final stage.
* **Before/after:** Keep the comparison extremely simple—**"Everything needed to build" → "Only what's needed to run."**
* **Pacing:** Make a visual change roughly every 3–5 seconds. Don't leave a static Dockerfile on screen while talking.
* **Ending:** Return to your face for the CTA so it feels like a natural recommendation rather than an advertisement.
