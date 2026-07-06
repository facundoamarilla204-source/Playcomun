"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { sendEmailAction } from "@/actions/send-email";

/* ── Reusable Scroll Reveal ── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)", scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }} // smooth apple-like ease
    >
      {children}
    </motion.div>
  );
}

/* ── Service Card ── */
function ServiceCard({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) {
  return (
    <div className="group relative rounded-[1.5rem] p-[1px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(124,58,237,0.15)] z-10 hover:z-20">
      <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-border-hover/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative rounded-[calc(1.5rem-1px)] bg-surface p-8 h-full shadow-lg">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${color}`}>
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <p className="text-foreground-muted text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ── Project Card ── */
function ProjectCard({ name, description, status, statusColor, tags, url, delay = 0 }: {
  name: string; description: string; status: string; statusColor: string; tags: string[]; url?: string; delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group relative rounded-[2rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] z-10 hover:z-20">
        {/* Outer Shell (Double Bezel) */}
        <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-border-hover/40 to-transparent shadow-[0_0_20px_rgba(124,58,237,0.0)] group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-shadow duration-700">
          <div className="rounded-[calc(2rem-1px)] bg-surface overflow-hidden">
            {/* Image Area */}
            <div className="relative h-56 md:h-72 bg-surface-elevated overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-indigo/10 to-electric/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-4/5 h-4/5 rounded-xl bg-surface-hover/90 border border-border/50 flex flex-col shadow-2xl backdrop-blur-sm overflow-hidden">
                  <div className="h-6 border-b border-border/50 bg-background/50 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-error/80" />
                    <div className="w-2 h-2 rounded-full bg-warning/80" />
                    <div className="w-2 h-2 rounded-full bg-success/80" />
                  </div>
                  <div className="flex-1 relative overflow-hidden bg-background">
                    {url && url !== "#" ? (
                      <iframe
                        src={url}
                        className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none border-none"
                        title={`${name} preview`}
                        tabIndex={-1}
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-foreground-subtle text-xs font-mono uppercase tracking-wider">{name} Preview</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 text-[11px] font-semibold font-mono uppercase tracking-wider rounded-full ${statusColor}`}>
                  {status}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{name}</h3>
              <p className="text-foreground-muted text-sm mb-6 leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono text-foreground-subtle bg-surface-elevated rounded-full border border-border/30">
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm" href={url || "#"}>
                Ver proyecto
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ── Tech Icon ── */
const techLogos: Record<string, React.ReactNode> = {
  "React": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#61DAFB]"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" /></svg>,
  "Next.js": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-foreground"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" /></svg>,
  "TypeScript": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#3178C6]"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" /></svg>,
  "Tailwind": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#06B6D4]"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" /></svg>,
  "Supabase": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#3ECF8E]"><path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z" /></svg>,
  "PostgreSQL": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#4169E1]"><path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z" /></svg>,
  "Resend": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-foreground"><path d="M2.023 0v24h5.553v-8.434h2.998L15.326 24h6.65l-5.372-9.258a7.652 7.652 0 0 0 3.316-3.016c.709-1.21 1.062-2.57 1.062-4.08 0-1.462-.353-2.767-1.062-3.91-.709-1.165-1.692-2.079-2.95-2.742C15.737.331 14.355 0 12.823 0Zm5.553 4.87h4.219c.731 0 1.349.125 1.851.376.526.252.925.618 1.2 1.098.274.457.412.994.412 1.611S15.132 9.12 14.88 9.6c-.229.48-.572.856-1.03 1.13-.434.252-.948.38-1.542.38H7.576Z" /></svg>,
  "Vercel": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-foreground"><path d="M24 22.525H0l12-21.05 12 21.05z" /></svg>,
  "Docker": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#2496ED]"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" /></svg>,
  "GitHub": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-foreground"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>,
  "WhatsApp": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#25D366]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>,
  "ChatGPT": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#10A37F]"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" /></svg>,
  "Gemini IA": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#8E75FF]"><path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81" /></svg>,
  "Figma": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-foreground"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" /></svg>,
  "Stripe": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#008CDD]"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" /></svg>,
  "Notion": <svg viewBox="0 0 24 24" className="w-8 h-8 fill-foreground"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" /></svg>
};

function TechIcon({ name }: { name: string }) {
  return (
    <div className="group flex flex-col items-center gap-3 py-6 transition-transform duration-500 hover:-translate-y-1">
      <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center shadow-lg group-hover:border-border-hover group-hover:bg-surface-hover group-hover:shadow-[0_10px_30px_rgba(124,58,237,0.15)] transition-all duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative z-10 transition-transform duration-500 group-hover:scale-110">
          {techLogos[name] || <span className="text-foreground-muted text-sm font-bold font-mono group-hover:text-foreground">{name.slice(0, 2).toUpperCase()}</span>}
        </span>
      </div>
      <span className="text-xs text-foreground-subtle font-medium">{name}</span>
    </div>
  );
}


export default function Home() {
  const { scrollY } = useScroll();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg("");
    setStatusType("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const result = await sendEmailAction(formData);

    if (result?.error) {
      setStatusMsg("Error: " + result.error);
      setStatusType("error");
    } else if (result?.success) {
      setStatusMsg("Mensaje enviado con éxito. ¡Gracias!");
      setStatusType("success");
      form.reset();
    }
    setIsSubmitting(false);
  }

  const heroMockupY = useTransform(scrollY, [0, 1000], [0, 150]);
  const heroTextY = useTransform(scrollY, [0, 1000], [0, 50]);
  const floatingCardY1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const floatingCardY2 = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO AWWWARDS TIER
      ═══════════════════════════════════════════ */}
      <section id="inicio" className="relative min-h-[100dvh] flex items-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Massive Animated Background Blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[5%] w-[800px] h-[800px] bg-primary/30 rounded-full blur-[200px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[40%] right-[20%] w-[600px] h-[600px] bg-indigo/30 rounded-full blur-[180px]"
          />
          <div className="absolute bottom-[0%] left-[10%] w-[700px] h-[700px] bg-electric/15 rounded-full blur-[200px]" />
        </div>

        {/* Noise Texture */}
        <div className="noise-overlay absolute inset-0 pointer-events-none z-0" />

        <div className="container-play relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Text Content */}
            <motion.div style={{ y: heroTextY }} className="z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6 drop-shadow-2xl"
              >
                Software a medida, sin{" "}
                <span className="gradient-text">intermediarios.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-10 max-w-lg"
              >
                Diseño y construyo aplicaciones web y plataformas SaaS para emprendedores y empresas que necesitan resultados, no reuniones eternas. Hablás conmigo, no con un account manager.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Button size="lg" href="#contacto">
                  Comencemos un proyecto
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Button>
                <Button variant="secondary" size="lg" href="#proyectos">Explorar mi trabajo</Button>
              </motion.div>
            </motion.div>

            {/* Apple-tier Mockup Composition */}
            <motion.div
              style={{ y: heroMockupY }}
              initial={{ opacity: 0, scale: 0.8, rotateY: 10, rotateX: 5 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block relative perspective-[1200px]"
            >
              {/* Massive Glow Behind Mockup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/40 to-indigo/40 rounded-full blur-[100px] pointer-events-none -z-10" />

              {/* Main Laptop (Mercury Dashboard) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-[110%] -ml-[5%] rounded-[2rem] p-[1px] bg-gradient-to-b from-white/20 to-transparent shadow-[0_40px_100px_rgba(0,0,0,0.8),0_0_40px_rgba(124,58,237,0.3)] backdrop-blur-3xl"
              >
                <div className="rounded-[calc(2rem-1px)] bg-[#111115]/90 p-4 border border-black/50">
                  <div className="rounded-xl bg-background border border-border overflow-hidden h-[340px] flex flex-col relative">
                    {/* Fake Browser Header */}
                    <div className="h-10 bg-[#1A1A20] flex items-center px-4 gap-2 border-b border-white/5 relative z-20">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/20" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/20" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/20" />
                      <div className="flex-1 flex justify-center">
                        <div className="px-10 py-1.5 bg-black/40 rounded-md text-[11px] font-mono text-white/50 border border-white/5 shadow-inner">
                          playcomun.com
                        </div>
                      </div>
                    </div>
                    {/* Fake Mercury Dashboard Content */}
                    <div className="flex-1 bg-gradient-to-br from-[#0D0D12] to-[#14141A] p-6 relative overflow-hidden">
                      {/* Grid Lines in bg */}
                      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                      <div className="flex justify-between items-center mb-6 relative z-10">
                        <div>
                          <h2 className="text-white font-bold text-lg mb-1">Resumen de Cuenta</h2>
                          <p className="text-white/50 text-xs">Métricas en tiempo real (Últimos 30 días)</p>
                        </div>
                        <div className="h-8 px-4 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center text-primary text-xs font-semibold cursor-default">
                          Exportar
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-6 relative z-10">
                        {/* Card 1 */}
                        <div className="h-24 bg-gradient-to-b from-white/5 to-transparent rounded-xl border border-white/10 p-4 flex flex-col justify-between">
                          <span className="text-white/50 text-xs font-medium">Ingresos MRR</span>
                          <div>
                            <div className="text-white font-bold text-xl mb-1">$12,450</div>
                            <div className="text-success text-xs flex items-center gap-1 font-medium">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                              +14.5%
                            </div>
                          </div>
                        </div>

                        {/* Card 2 with Line Chart */}
                        <div className="h-24 bg-gradient-to-b from-primary/10 to-transparent rounded-xl border border-primary/20 p-4 flex flex-col justify-between relative overflow-hidden">
                          <span className="text-primary/80 text-xs font-medium relative z-10">Nuevos Usuarios</span>
                          <div className="relative z-10">
                            <div className="text-white font-bold text-xl mb-1">8,234</div>
                            <div className="text-primary text-xs flex items-center gap-1 font-medium">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                              +22.4%
                            </div>
                          </div>
                          <svg className="absolute bottom-0 left-0 w-full h-12 opacity-40 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 40" fill="none">
                            <path d="M0,40 L0,20 C10,15 20,30 30,20 C40,10 50,25 60,15 C70,5 80,25 90,10 L100,5 L100,40 Z" fill="url(#gradient-line)" />
                            <path d="M0,20 C10,15 20,30 30,20 C40,10 50,25 60,15 C70,5 80,25 90,10 L100,5" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
                            <defs>
                              <linearGradient id="gradient-line" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="currentColor" className="text-primary" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="currentColor" className="text-primary" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>

                        {/* Card 3 */}
                        <div className="h-24 bg-gradient-to-b from-white/5 to-transparent rounded-xl border border-white/10 p-4 flex flex-col justify-between">
                          <span className="text-white/50 text-xs font-medium">Conversión</span>
                          <div>
                            <div className="text-white font-bold text-xl mb-1">4.2%</div>
                            <div className="text-warning text-xs flex items-center gap-1 font-medium">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                              Estable
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="h-32 bg-white/[0.03] rounded-xl border border-white/5 relative z-10 p-4 flex flex-col">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/50 text-xs font-medium">Tráfico Diario</span>
                          <span className="text-white/30 text-[10px]">Oct 1 - Oct 9</span>
                        </div>
                        <div className="flex gap-2 items-end flex-1">
                          {[40, 70, 45, 90, 65, 80, 50, 100, 75].map((h, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ duration: 1, delay: 1 + i * 0.1 }}
                              className="flex-1 bg-gradient-to-t from-primary/50 to-electric/80 rounded-t-sm"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Overlapping Phone (FitAdmi) */}
              <motion.div
                style={{ y: floatingCardY1 }}
                className="absolute -bottom-16 -left-16 w-[180px] z-30"
              >
                <div className="rounded-[2.5rem] p-[1.5px] bg-gradient-to-tr from-white/20 via-white/5 to-white/30 shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(91,92,235,0.4)] backdrop-blur-md">
                  <div className="rounded-[calc(2.5rem-1.5px)] bg-black p-2 border border-black">
                    <div className="rounded-[2rem] bg-background border border-white/10 overflow-hidden h-[360px] relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-20" />

                      {/* Phone Content */}
                      <div className="absolute inset-0 bg-gradient-to-b from-indigo/20 to-background p-4 pt-8">
                        <div className="flex justify-between items-center mb-6 mt-2">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/10">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
                          </div>
                          <div className="px-2 py-1 bg-primary/20 border border-primary/30 text-primary rounded-full text-[9px] font-bold tracking-wide uppercase">
                            Premium
                          </div>
                        </div>

                        <div className="h-32 bg-gradient-to-br from-indigo/30 to-primary/30 rounded-2xl border border-white/10 mb-4 p-4 flex flex-col justify-between relative overflow-hidden">
                          <span className="text-white/70 text-[10px] font-medium relative z-10">Ventas del Mes</span>
                          <div className="relative z-10">
                            <div className="text-white font-bold text-2xl mb-0 leading-none">$8,450</div>
                            <div className="text-success text-[9px] flex items-center gap-1 font-medium mt-1">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                              +12.5% vs mes anterior
                            </div>
                          </div>
                          <svg className="absolute bottom-0 right-0 w-24 h-24 opacity-20 -mr-4 -mb-4 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-20 bg-white/5 rounded-xl border border-white/10 p-3 flex flex-col justify-center items-center text-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary mb-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            <span className="text-white font-bold text-[13px] leading-tight">432</span>
                            <span className="text-white/40 text-[9px] font-medium">Clientes</span>
                          </div>
                          <div className="h-20 bg-white/5 rounded-xl border border-white/10 p-3 flex flex-col justify-center items-center text-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric mb-1"><path d="M22 11.08V12a10.0001 10.0001 0 0 1-5.93 9.14M22 4L12 14.01l-3-3"></path></svg>
                            <span className="text-white font-bold text-[13px] leading-tight">94%</span>
                            <span className="text-white/40 text-[9px] font-medium">Satisfacción</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 1 */}
              <motion.div
                style={{ y: floatingCardY2 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 -right-12 z-20"
              >
                <div className="px-6 py-4 rounded-2xl bg-surface/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">99.9% Uptime</p>
                    <p className="text-xs text-foreground-muted">Sistemas robustos</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONFIANZA / STATS
      ═══════════════════════════════════════════ */}
      <section className="py-24 border-y border-border/30 bg-surface/20">
        <div className="container-play">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: 100, prefix: "", suffix: "%", label: "Proyectos a tiempo", isText: false },
                { value: 10, prefix: "+", suffix: "", label: "Tecnologías dominadas", isText: false },
                { value: 0, textValue: "Directo", prefix: "", suffix: "", label: "Soporte sin intermediarios", isText: true },
                { value: 5, prefix: "", suffix: "", label: "Productos de alto impacto", isText: false },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left group">
                  <h3 className="text-4xl md:text-5xl font-extrabold gradient-text mb-2 drop-shadow-md group-hover:scale-105 transition-transform duration-500 origin-left">
                    {stat.isText ? stat.textValue : <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />}
                  </h3>
                  <p className="text-sm font-medium text-foreground-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICIOS
      ═══════════════════════════════════════════ */}
      <section id="servicios" className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
        <div className="container-play relative z-10">
          <Reveal>
            <div className="text-center mb-24">
              <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-semibold font-mono uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/20 rounded-full shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                Servicios
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">Mis Servicios</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>, title: "Landing Pages y Sitios Web", desc: "Tu presencia online lista en días, no meses. Páginas de carga inmediata pensadas exclusivamente para convertir visitantes en clientes.", color: "bg-primary/15 text-primary border border-primary/20" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="9" y1="3" x2="9" y2="21" /></svg>, title: "Aplicaciones Web a Medida", desc: "Sistemas únicos sin plantillas ni CMS lentos. Interfaces rápidas y robustas diseñadas para maximizar la retención de tus usuarios.", color: "bg-indigo/15 text-indigo border border-indigo/20" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>, title: "Plataformas SaaS", desc: "Arquitecturas en la nube preparadas para escalar sin romperse. Seguridad, multi-tenant y máximo rendimiento desde el día uno.", color: "bg-electric/15 text-electric border border-electric/20" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.275 1.275L3 12l5.8 1.9a2 2 0 0 1 1.275 1.275L12 21l1.9-5.8a2 2 0 0 1 1.275-1.275L21 12l-5.8-1.9a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>, title: "Desarrollo Potenciado por IA", desc: "Integro modelos de inteligencia artificial en tus procesos. Escribo código avanzado mucho más rápido sin comprometer la calidad.", color: "bg-warning/15 text-warning border border-warning/20" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>, title: "Diseño UI/UX", desc: "Diseño basado en usabilidad, no solo estética. Una interfaz clara, sin fricciones y enfocada 100% en el recorrido del usuario.", color: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v4" /><path d="M7 11h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z" /><path d="M12 17v4" /><path d="M9 7h6" /><path d="M12 3v4" /></svg>, title: "APIs e Integraciones", desc: "Sincronizo tus plataformas existentes (pasarelas de pagos, CRM, WhatsApp) para automatizar y eliminar tu trabajo manual.", color: "bg-rose-500/15 text-rose-400 border border-rose-500/20" },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <ServiceCard icon={s.icon} title={s.title} description={s.desc} color={s.color} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROYECTOS DESTACADOS
      ═══════════════════════════════════════════ */}
      <section id="proyectos" className="py-32 bg-surface/30 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container-play">
          <Reveal>
            <div className="text-center mb-24">
              <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-semibold font-mono uppercase tracking-[0.2em] text-indigo bg-indigo/10 border border-indigo/20 rounded-full shadow-[0_0_15px_rgba(91,92,235,0.2)]">
                Proyectos
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Proyectos Destacados</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ProjectCard
              name="Mercury Eventos"
              description="Centralizá toda la organización de tus eventos en una única plataforma. Gestioná invitaciones digitales, confirmaciones de asistencia, listas de invitados, mesas y mucho más desde un solo lugar, de forma simple, rápida y profesional."
              status="Producción"
              statusColor="bg-success/15 text-success border border-success/20"
              tags={["React", "Vite", "Tailwind", "Supabase", "React Query"]}
              url="https://mercuryeventos.online/"
              delay={0}
            />
            <ProjectCard
              name="FitAdmi"
              description="Modernicé la administración de gimnasios. Un sistema SaaS que elimina el uso de planillas, automatiza el control de socios y provee métricas de retención clave para dueños de centros fitness."
              status="Beta"
              statusColor="bg-warning/15 text-warning border border-warning/20"
              tags={["React", "Vite", "Tailwind", "Supabase", "Gemini AI", "MercadoPago"]}
              url="https://fitadmi.vercel.app/"
              delay={0.15}
            />
            <ProjectCard
              name="TurnoGol"
              description="Cero fricción en la reserva de canchas. Uní a jugadores y predios deportivos en una app ultrarrápida que gestiona disponibilidad y pagos 24/7 sin intervención humana."
              status="En desarrollo"
              statusColor="bg-primary/15 text-primary border border-primary/20"
              tags={["Next.js", "Supabase", "Framer Motion", "MercadoPago"]}
              url="https://turnogol.vercel.app/"
              delay={0}
            />
            {showMoreProjects && (
              <>
                <ProjectCard
                  name="El Impostor"
                  description="Divertido juego web de deducción social para jugar con amigos desde cualquier dispositivo, inspirado en clásicos de identidad oculta."
                  status="Completado"
                  statusColor="bg-success/15 text-success border border-success/20"
                  tags={["React", "Juegos Web"]}
                  url="https://elimpostorxapp.vercel.app/"
                  delay={0}
                />
                <ProjectCard
                  name="Pasa la Bomba"
                  description="Juego web rápido y explosivo. Responde las preguntas y pasa el turno antes de que se acabe el tiempo. Ideal para previas y reuniones."
                  status="Completado"
                  statusColor="bg-success/15 text-success border border-success/20"
                  tags={["React", "Animaciones"]}
                  url="https://pasalabomba.vercel.app/"
                  delay={0.15}
                />
              </>
            )}

            <Reveal delay={0.15}>
              <div className="group relative rounded-[2rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] z-10 hover:z-20 h-full flex flex-col justify-center bg-gradient-to-br from-surface to-surface-elevated border border-border p-10 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-primary/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-electric/10 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">¿Tenés un proyecto en mente?</h3>
                  <p className="text-foreground-muted text-sm mb-8 leading-relaxed max-w-[280px] mx-auto">
                    Dejá de posponer esa idea. Hablemos de tus objetivos y veamos cómo puedo ayudarte a construirla.
                  </p>
                  <Button variant="primary" size="lg" href="#contacto" className="w-full sm:w-auto">
                    Hablemos
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowMoreProjects(!showMoreProjects)}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface hover:bg-surface-hover hover:border-border-hover transition-all text-sm font-medium text-foreground group"
              >
                {showMoreProjects ? "Ver menos proyectos" : "Ver más proyectos"}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${showMoreProjects ? "rotate-180" : "rotate-0"}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TECNOLOGÍAS
      ═══════════════════════════════════════════ */}
      <section id="tecnologias" className="py-32">
        <div className="container-play">
          <Reveal>
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-semibold font-mono uppercase tracking-[0.2em] text-electric bg-electric/10 border border-electric/20 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                Stack
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">El estándar de la industria</h2>
              <p className="text-lg text-foreground-muted mt-6 max-w-3xl mx-auto">
                Construyo tus productos utilizando las mismas herramientas que potencian a las startups más rápidas del mundo. Un stack tecnológico moderno, seguro y diseñado para escalar sin límites.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative mt-16 overflow-hidden w-full max-w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max animate-infinite-scroll gap-6">
                {[
                  ...[
                    "React", "Next.js", "TypeScript", "Tailwind", "Supabase",
                    "PostgreSQL", "Resend", "Vercel", "Docker", "GitHub",
                    "WhatsApp", "ChatGPT", "Gemini IA", "Figma", "Stripe", "Notion"
                  ],
                  ...[
                    "React", "Next.js", "TypeScript", "Tailwind", "Supabase",
                    "PostgreSQL", "Resend", "Vercel", "Docker", "GitHub",
                    "WhatsApp", "ChatGPT", "Gemini IA", "Figma", "Stripe", "Notion"
                  ]
                ].map((tech, idx) => (
                  <div key={`${tech}-${idx}`} className="w-[120px] flex-shrink-0">
                    <TechIcon name={tech} />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROCESO DE TRABAJO
      ═══════════════════════════════════════════ */}
      <section className="py-32 bg-surface/30 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="container-play">
          <Reveal>
            <div className="text-center mb-24">
              <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-semibold font-mono uppercase tracking-[0.2em] text-success bg-success/10 border border-success/20 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                Metodología
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Mi forma de construir</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Entender antes de programar", desc: "No escribo una sola línea de código hasta entender cómo tu producto va a resolver un problema real y qué métricas importan." },
              { step: "02", title: "Diseño para la conversión", desc: "Prototipo interfaces rápidas y premium. Si el usuario no entiende cómo usar la plataforma en 3 segundos, el diseño falló." },
              { step: "03", title: "Ingeniería de alto nivel", desc: "Arquitectura sólida desde el día uno. Utilizo el mismo stack tecnológico y las mejores prácticas que las startups más exitosas." },
              { step: "04", title: "Lanzamiento y escala", desc: "No te entrego un archivo ZIP. Despliego tu producto en producción y configuro el terreno para que escale de forma automática." },
            ].map((p, i) => (
              <Reveal key={p.step} delay={i * 0.15}>
                <div className="group relative p-8 rounded-[2rem] bg-surface border border-border/50 h-full transition-all duration-500 hover:-translate-y-2 hover:border-border hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-6xl font-extrabold gradient-text opacity-20 group-hover:opacity-40 transition-opacity duration-500 absolute -top-2 -right-2">{p.step}</span>
                  <div className="relative z-10 pt-12">
                    <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                    <p className="text-foreground-muted text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SOBRE PLAYCOMUN
      ═══════════════════════════════════════════ */}
      <section id="nosotros" className="py-32">
        <div className="container-play">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-semibold font-mono uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/20 rounded-full shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                  Sobre mí
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                  Conmigo hablás,<br />
                  <span className="gradient-text">conmigo trabajás.</span>
                </h2>
                <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                  Cuando me escribís, no hay un vendedor que después le pasa el proyecto a otro. El que te responde es el mismo que va a escribir cada línea de código de tu producto — desde el primer mensaje hasta el día que lo publicás.
                </p>
                <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                  Esa no es una limitación: es la razón por la que no se pierde nada en el camino. Mercury, FitAdmi y TurnoGol no son casos de un cliente que no podés ver — son productos que construí por mi cuenta para probar mi forma de trabajar antes de ofrecértela a vos.
                </p>
                <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                  No compito con una agencia en cantidad de gente. Compito en que vas a tener una sola persona responsable de que tu proyecto funcione, sin nadie en el medio traduciendo lo que pediste en algo distinto.
                </p>
                <p className="text-lg text-foreground-muted leading-relaxed mb-10">
                  Si tenés una idea que necesita convertirse en real, hablemos 15 minutos y vemos si puedo ayudarte.
                </p>
                <Button variant="primary" size="lg" href="#contacto">Hablemos</Button>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="relative group w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-indigo/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                <Image
                  src="/developer_illustration.png"
                  alt="Ilustración de desarrollo web moderno"
                  width={600}
                  height={600}
                  priority
                  className="relative z-10 w-full max-w-lg h-auto object-contain transform transition-transform duration-700 group-hover:scale-105 mix-blend-screen pointer-events-none scale-110"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════ */}
      <section id="contacto" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-primary via-indigo to-electric rounded-full blur-[200px]"
          />
        </div>
        <div className="noise-overlay absolute inset-0 pointer-events-none" />
        <div className="container-play relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            <Reveal>
              <div className="text-left">
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.05] drop-shadow-xl">
                  Es momento de{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">escalar tu visión.</span>
                </h2>
                <p className="text-lg md:text-xl text-foreground-muted mb-12 font-medium max-w-lg">
                  Construyamos el software que tu empresa necesita para dominar su industria. Sin intermediarios, trabajá de forma directa con el desarrollador que escribirá tu código.
                </p>

                <div className="flex flex-col gap-4">
                  {/* Changed from href to standard anchor to allow target=_blank, or Button supports it if it passes props. Button component usually passes props to Link or anchor. */}
                  <Button size="lg" className="w-fit px-8 h-14 text-base" href="https://wa.me/5491134321946?text=Hola,%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                    Contactar por WhatsApp
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-[1px] rounded-3xl bg-gradient-to-b from-border-hover/40 to-transparent shadow-2xl">
                <form className="bg-surface p-8 rounded-[calc(1.5rem-1px)] flex flex-col gap-6" onSubmit={handleFormSubmit}>
                  <h3 className="text-2xl font-bold mb-2">Dejame un mensaje</h3>

                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="name" className="text-sm font-medium text-foreground-muted">Nombre</label>
                    <input id="name" name="name" required type="text" placeholder="Tu nombre o empresa" className="bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-foreground-subtle/50" />
                  </div>

                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="email" className="text-sm font-medium text-foreground-muted">Email</label>
                    <input id="email" name="email" required type="email" placeholder="correo@empresa.com" className="bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-foreground-subtle/50" />
                  </div>

                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="message" className="text-sm font-medium text-foreground-muted">Mensaje</label>
                    <textarea id="message" name="message" required rows={4} placeholder="Contame sobre tu proyecto..." className="bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-foreground-subtle/50"></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full h-12 mt-2 bg-foreground text-background font-medium rounded-xl hover:bg-foreground-muted transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                    {!isSubmitting && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </button>
                  {statusMsg && (
                    <p className={`text-sm mt-2 text-center ${statusType === "error" ? "text-rose-500" : "text-success"}`}>
                      {statusMsg}
                    </p>
                  )}
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
