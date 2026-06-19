import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  readTime: string;
  image: string;
  content: {
    sectionTitle?: string;
    paragraphs: string[];
  }[];
}

const posts: Record<string, BlogPost> = {
  "beginner-watercolor-mistakes": {
    slug: "beginner-watercolor-mistakes",
    title: "5 Watercolor Mistakes Every Beginner Makes (And How to Fix Them)",
    excerpt: "I made all of these. Repeatedly. Here's what I wish someone had told me in year one — from overworking wet paint to choosing the wrong paper.",
    tag: "Watercolor Tips",
    date: "June 12, 2024",
    readTime: "6 min read",
    image: "/images/art-2.png",
    content: [
      {
        paragraphs: [
          "Watercolor is one of the most accessible yet deceptively challenging painting mediums. When I first bought a cheap palette and sat down at my kitchen table, I expected the colors to flow effortlessly. Instead, I got muddy washes, buckled paper, and frustrating colors that looked chalky when dry.",
          "Looking back, nearly all of my early frustrations came from five simple mistakes. Here is what I wish someone had told me during my first year of watercolor painting."
        ]
      },
      {
        sectionTitle: "Mistake 1: Buying Cheap Cellulose Paper",
        paragraphs: [
          "If you only change one thing about your supplies, make it your paper. Most beginner paper pads are made of wood pulp (cellulose). These sheets buckle instantly when wet, causing paint to pool in valley pockets. The fibers also scrub off easily if you layer paint.",
          "How to fix it: Invest in 100% cotton cold-press paper (at least 140lb / 300gsm). Cotton fibers absorb water evenly, letting you blend washes beautifully and work in multiple layers without destroying the paper."
        ]
      },
      {
        sectionTitle: "Mistake 2: Overworking Wet Paint",
        paragraphs: [
          "When watercolor is wet, it looks vibrant and alive. It is tempting to keep moving the paint around with your brush to 'perfect' a blend. However, once paper starts to dry, brushing over it disturbs the settling pigment particles, leading to muddy, scrubbed textures.",
          "How to fix it: Lay down your wash and let it go. If it's not perfect, let it dry completely before glazing another layer on top. Watercolor is at its most beautiful when it is left to settle naturally."
        ]
      },
      {
        sectionTitle: "Mistake 3: Fear of Dark Pigment",
        paragraphs: [
          "Beginners often paint too light because they are afraid of making mistakes. Because watercolor dries about 20-30% lighter than it looks when wet, starting with too much water results in washed-out, lifeless paintings.",
          "How to fix it: Mix your paint on a palette to a thick tea or milk consistency for shadows. Don't be afraid of using saturated pigment from the tube. Deep darks are what create contrast and make your focal points pop."
        ]
      },
      {
        sectionTitle: "Mistake 4: Not Understanding Water Ratios",
        paragraphs: [
          "Control in watercolor is entirely about the ratio of water on your brush to water on the paper. If your brush is too wet when painting on damp paper, water will flood into the paint, creating backruns (cauliflowers).",
          "How to fix it: Keep a cotton towel next to your palette. Always dab your brush on the towel after rinsing to control the moisture level before touching the canvas."
        ]
      },
      {
        sectionTitle: "Mistake 5: Rushing the Drying Process",
        paragraphs: [
          "If you paint a wet layer directly next to another wet layer, they will bleed together. While this wet-on-wet blend is a great technique, it becomes a mess if you wanted clean, sharp boundaries.",
          "How to fix it: Take a break! Let layers dry naturally, or use a hair dryer on a cool, low setting to speed up the process. Clean details require a dry foundation."
        ]
      }
    ]
  },
  "diy-paper-flower-tutorial": {
    slug: "diy-paper-flower-tutorial",
    title: "How to Make Gorgeous Paper Quilled Flowers for Beginners",
    excerpt: "Paper quilling is one of the most meditative crafts I know. You need barely any supplies — just paper strips, a tool, and patience.",
    tag: "Paper Craft",
    date: "May 28, 2024",
    readTime: "8 min read",
    image: "/images/art-1.png",
    content: [
      {
        paragraphs: [
          "Paper quilling is the art of rolling narrow strips of paper, shaping the coils, and gluing them together to create intricate designs. It dates back to the Renaissance, when monastics used gold-edged paper to decorate religious items. Today, it is a relaxing, highly tactile hobby.",
          "If you are looking for a creative, screen-free way to spend an afternoon, quilling paper flowers is the perfect place to start."
        ]
      },
      {
        sectionTitle: "Supplies You Need",
        paragraphs: [
          "You do not need expensive machinery. The bare essentials are: 1) A slotted quilling tool, 2) Quilling paper strips (usually 3mm or 5mm width), 3) Fine-tip craft glue, 4) A cork board or quilling board, and 5) Tweezers.",
          "The slotted tool has a small metal tip with a slit in the middle. You slide the end of your paper strip into this slit and roll the paper around the barrel to make a tight roll."
        ]
      },
      {
        sectionTitle: "Step 1: The Loose Coil",
        paragraphs: [
          "Insert a paper strip into the quilling tool slot. Turn the tool slowly, keeping the paper aligned and straight until the entire strip is rolled. Slide the coil off the tool. Let it expand in the palm of your hand or on a quilling board until it forms a loose scroll. Dab a tiny dot of glue on the outer tail and press it closed."
        ]
      },
      {
        sectionTitle: "Step 2: Shaping the Petals",
        paragraphs: [
          "To make a teardrop shape (perfect for petals), pinch one side of the loose coil between your thumb and forefinger. To make a marquise leaf shape, pinch two opposite sides at the same time. Experiment with pinching different parts of the coil to create scrolls, waves, and diamonds."
        ]
      },
      {
        sectionTitle: "Step 3: Assembly & Mounting",
        paragraphs: [
          "Arrange five or six teardrop petals in a circle with the pinched points meeting in the middle. Apply a tiny dot of glue where the points meet. Hold them together with tweezers until dry. You can add a tight, unpinched yellow coil in the center to finish your flower. Mount them on thick watercolor cardstock to create custom greeting cards or framed wall art!"
        ]
      }
    ]
  },
  "setting-up-art-space-budget": {
    slug: "setting-up-art-space-budget",
    title: "Building a Beautiful Art Space on a Budget",
    excerpt: "My studio tour — including what I actually use versus what I bought and never touched. Plus my top sources for affordable supplies.",
    tag: "Studio Life",
    date: "May 10, 2024",
    readTime: "5 min read",
    image: "/images/artist.png",
    content: [
      {
        paragraphs: [
          "When you look at artists on social media, you often see vast, sunlit lofts with rows of custom-made oak flat files and expensive easel setups. It is easy to think, 'I can't make art because I don't have the space.'",
          "For the first two years of my creative journey, my studio was a folding tray table in the corner of my bedroom. I made some of my favorite pieces there. Creating a beautiful, inspiring art space is about organization and light, not square footage."
        ]
      },
      {
        sectionTitle: "Prioritize Light Over Space",
        paragraphs: [
          "Color matching and detailed work require accurate light. If you don't have a window that gets good natural light, do not paint under standard warm yellow household bulbs. Your colors will look completely different when taken outside.",
          "How to fix it: Buy a daylight-balanced LED bulb (5000K-6000K spectrum) for an adjustable desk lamp. This simple swap will save you hours of color frustration."
        ]
      },
      {
        sectionTitle: "Utilize Vertical Storage",
        paragraphs: [
          "When you have a small desk, it gets cluttered with jars, brushes, and palettes instantly, leaving you no room to paint. Keep your workspace clear by storing tools vertically.",
          "I use a cheap metal pegboard mounted on the wall above my desk. Hanging baskets hold my paper rolls, paint tubes, and masking tape, keeping my tabletop empty and clean."
        ]
      },
      {
        sectionTitle: "Thrift Store Organization Hacks",
        paragraphs: [
          "Do not buy expensive custom acrylic art organizers. Thrift stores are full of beautiful, character-rich storage solutions.",
          "I organize my brushes in vintage ceramic mugs, store my papers in wire kitchen racks, and mix paints in vintage white porcelain saucers that I bought for fifty cents each. It saves money and makes your space feel unique and personal."
        ]
      }
    ]
  },
  "acrylic-pour-complete-guide": {
    slug: "acrylic-pour-complete-guide",
    title: "Acrylic Pour Painting: The Complete Beginner Guide",
    excerpt: "Acrylic pouring looks like magic and feels like it too. Here's everything you need — ratios, cells, techniques, and what not to use.",
    tag: "Mixed Media",
    date: "April 22, 2024",
    readTime: "10 min read",
    image: "/images/art-4.png",
    content: [
      {
        paragraphs: [
          "Fluid art is incredibly popular because it requires no drawing skills, yet yields organic, abstract designs that look like satellite photos of the earth or slices of polished agate.",
          "However, simply dumping wet acrylic paint onto a canvas will leave you with a cracked, muddy mess. The secret to fluid art is paint density and viscosity."
        ]
      },
      {
        sectionTitle: "The Basic Supplies",
        paragraphs: [
          "You will need: 1) Acrylic paints (craft paints work, but heavy body paints mixed with medium are richer), 2) Pouring medium (which thins the paint without diluting the binder, like Floetrol or school glue mixed with water), 3) A canvas, 4) Plastic cups and stir sticks, and 5) A workspace covered in plastic sheeting."
        ]
      },
      {
        sectionTitle: "Mixing the Ratios",
        paragraphs: [
          "For standard pouring, your paint mixture should have the consistency of warm honey or melted ice cream. If you lift your stir stick, the paint should flow off in a continuous stream, forming a pool that disappears within two seconds.",
          "A general starting ratio is 1 part paint to 2 parts Floetrol, plus a few drops of water if the mix is too thick. Stir slowly to prevent air bubbles."
        ]
      },
      {
        sectionTitle: "The Flip Cup Method",
        paragraphs: [
          "This is the easiest and most exciting technique. Pour your individual colored mixtures into a single cup, layering them one on top of the other (e.g. blue, white, gold, dark blue). Place your canvas face-down on top of the cup, hold them together, and flip them over in one quick motion. Let the cup sit upside down for 30 seconds so paint settles, then lift it upward. Tilt the canvas gently to spread the paint over the edges."
        ]
      },
      {
        sectionTitle: "Creating 'Cells'",
        paragraphs: [
          "Cells are the circular rings of color that pop up through the layers. They occur naturally when paint layers have different densities. You can encourage cell formation by adding two drops of 100% silicone oil to your colored paint mixtures before layering them in the cup. Once the paint is poured, run a chef's torch briefly over the wet paint to bring the cells to the surface."
        ]
      }
    ]
  },
  "macrame-beginners": {
    slug: "macrame-beginners",
    title: "Your First Macramé Project: A Simple Wall Hanging",
    excerpt: "Three knots. That's all you need. I'll walk you through a wall hanging from setup to finished piece in under an afternoon.",
    tag: "Fiber Art",
    date: "April 5, 2024",
    readTime: "7 min read",
    image: "/images/art-5.png",
    content: [
      {
        paragraphs: [
          "Macramé is a textile craft that uses knotting instead of weaving or knitting to create panels, plant hangers, and bags. It was popular in the 1970s and has made a huge comeback in modern interior design.",
          "It is one of the most forgiving crafts: if you make a mistake, you just untie the knot and try again. Here is how to make a beautiful, beginner-friendly wall hanging."
        ]
      },
      {
        sectionTitle: "The Three Essential Knots",
        paragraphs: [
          "To complete this wall hanging, you only need to know three knots: 1) The Lark's Head Knot (used to attach the cords to your wooden dowel), 2) The Square Knot (the basic flat knot of macramé), and 3) The Double Half Hitch Knot (used to create diagonal lines and borders).",
          "Use a 4mm three-strand cotton cord for your first project. It is soft on your hands and brushes out into beautiful fringes."
        ]
      },
      {
        sectionTitle: "Step 1: Mounting the Cords",
        paragraphs: [
          "Cut ten lengths of cotton cord, each about 8 feet long. Fold a cord in half to form a loop. Place the loop over your wooden dowel, pull the two loose tails under the dowel and through the loop, and pull tight. This is a Lark's Head Knot. Repeat with all ten cords, giving you twenty working strands hanging from the dowel."
        ]
      },
      {
        sectionTitle: "Step 2: The Square Knot Mesh",
        paragraphs: [
          "Take the first four cords on the left. Cords 1 and 4 are working cords; 2 and 3 are filler cords. Cross cord 1 over the fillers and under cord 4. Bring cord 4 under the fillers and up through the loop of cord 1. Pull tight. This is half a square knot. Complete the knot by crossing cord 1 under the fillers and cord 4 over the fillers, bringing cord 4 down through the loop. Repeat across the row."
        ]
      },
      {
        sectionTitle: "Step 3: Finishing & Fringes",
        paragraphs: [
          "Create three rows of alternating square knots to form a mesh pattern. To finish, use a pair of sharp fabric scissors to trim the bottom of the cords in a clean 'V' shape. Use a fine-tooth comb to brush out the cord ends, creating a soft, fluffy fringe. Hang your finished piece on the wall!"
        ]
      }
    ]
  }
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — Journal`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <article style={{ minHeight: "100vh", paddingBottom: "120px" }}>
        {/* Hero image and title block */}
        <section style={{ paddingTop: "140px", paddingBottom: "60px", paddingLeft: "48px", paddingRight: "48px", maxWidth: "1000px", margin: "0 auto" }}>
          <Reveal>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--rust)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                marginBottom: "32px",
                cursor: "none",
              }}
              className="ink-line"
            >
              <span>← Back to Journal</span>
            </Link>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <span className="tag-pill">{post.tag}</span>
              <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{post.date} · {post.readTime}</span>
            </div>

            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--ink)",
              marginBottom: "32px",
            }}>
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15} direction="scale">
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "21/9",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(26,22,18,0.06)",
              marginBottom: "60px",
            }}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 1000px) 100vw, 1000px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </Reveal>

          {/* Reading body */}
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            {post.content.map((section, idx) => (
              <Reveal key={idx} delay={idx * 0.05} style={{ marginBottom: "40px" }}>
                {section.sectionTitle && (
                  <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.9rem",
                    fontWeight: 400,
                    color: "var(--ink)",
                    marginTop: "48px",
                    marginBottom: "20px",
                  }}>
                    {section.sectionTitle}
                  </h2>
                )}
                {section.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    style={{
                      color: "var(--muted)",
                      fontSize: "1.05rem",
                      lineHeight: 1.9,
                      marginBottom: "24px",
                    }}
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA bottom */}
        <section style={{
          marginTop: "60px",
          padding: "80px 48px",
          textAlign: "center",
          borderTop: "1px solid rgba(26,22,18,0.08)",
          background: "var(--cream-dark)"
        }}>
          <Reveal>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 400, color: "var(--ink)", marginBottom: "16px" }}>
              Join the Creative Studio
            </h3>
            <p style={{ color: "var(--muted)", marginBottom: "32px", fontSize: "0.95rem" }}>
              I release step-by-step videos and creative breakdowns for every craft project I tackle.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mag-btn"
                style={{
                  padding: "14px 30px",
                  background: "var(--rust)",
                  color: "var(--cream)",
                  borderRadius: "100px",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  border: "1px solid var(--rust)",
                  textDecoration: "none",
                }}
              >
                <span>Watch Tutorials →</span>
              </a>
              <Link
                href="/gallery"
                className="mag-btn"
                style={{
                  padding: "14px 30px",
                  border: "1px solid rgba(26,22,18,0.22)",
                  color: "var(--ink)",
                  borderRadius: "100px",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                <span>View Portfolio</span>
              </Link>
            </div>
          </Reveal>
        </section>
      </article>
    </>
  );
}
