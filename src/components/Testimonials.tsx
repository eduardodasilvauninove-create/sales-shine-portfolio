import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    image: testimonial1,
    name: "Ricardo Oliveira",
    role: "CEO, TechStart",
    rating: 5,
    text: "Incrível trabalho! O site ficou exatamente como imaginei e minha empresa teve um aumento de 150% nos contatos. Recomendo demais!",
  },
  {
    image: testimonial2,
    name: "Ana Carolina Silva",
    role: "Proprietária, Beleza & Estilo",
    rating: 5,
    text: "Profissionalismo do início ao fim. O site ficou lindo, moderno e meus clientes sempre elogiam. Valeu cada centavo investido!",
  },
  {
    image: testimonial3,
    name: "Lucas Mendes",
    role: "Fundador, DeliveryFast",
    rating: 5,
    text: "Triplicamos nossas vendas online depois do novo site. A equipe entendeu perfeitamente nossa necessidade e entregou além das expectativas.",
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -8 }}
      className="relative p-6 md:p-8 rounded-2xl glass"
    >
      {/* Quote icon */}
      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
      
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.3 + i * 0.05 }}
          >
            <Star className="w-5 h-5 fill-primary text-primary" />
          </motion.div>
        ))}
      </div>

      {/* Text */}
      <p className="text-foreground/90 mb-6 leading-relaxed">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <motion.div 
          className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const Testimonials = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section id="depoimentos" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-glow opacity-30"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]) }}
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que dizem sobre nossa parceria.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { value: "4.9/5", label: "Avaliação Média" },
            { value: "100%", label: "Projetos Entregues" },
            { value: "+50", label: "Clientes Ativos" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="px-8 py-4 rounded-xl glass"
            >
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
