"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { usePathname } from "next/navigation";

const Footer = () => {
  const footerRef = useRef(null);
  const pathname = usePathname();
  const isContactPage = pathname === "/support";

  useEffect(() => {
    console.log(footerRef.current);
  }, []);

  return (
    <>
      <footer className="border-stroke dark:border-strokedark dark:bg-blacksection border-t bg-white">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={180}
                    height={80}
                    src="/images/logo/Fundacion_Corall _Family_Dominicana.png"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={180}
                    height={80}
                    src="/images/logo/Fundacion_Corall _Family_Dominicana.png"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mt-5 mb-10">
                  Trabajamos con esperanza, convicción y amor.
                </p>

                <p className="text-sectiontitle mb-1.5 tracking-[5px] text-amber-600 uppercase">
                  <strong>contactos</strong>
                </p>
                <a
                  href="tel:+18098353555"
                  className="text-itemtitle font-medium text-black dark:text-white"
                >
                  <FaPhoneAlt
                    size={18}
                    className="mr-2 inline-block text-amber-600"
                  />
                  +1 809-835-3555
                </a>
                <br />
                <a
                  href="mailto:fundacion@coralldominicana.org"
                  className="text-itemtitle font-medium text-black dark:text-white"
                >
                  <MdEmail
                    size={18}
                    className="mr-2 inline-block text-amber-600"
                  />
                  fundacion@coralldominicana.org
                </a>
                <br />
                {isContactPage && (
                  <a
                    href="mailto:fundacion@coralldominicana.org"
                    className="text-itemtitle font-medium text-black dark:text-white"
                  >
                    <MdLocationOn
                      size={20}
                      className="mr-2 inline-block text-amber-600"
                    />
                    Av. Francia 143, 10204. Santo Domingo, República Dominicana.
                  </a>
                )}
              </motion.div>
              <p>{footerRef.current}</p>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="text-itemtitle2 mb-9 font-medium text-amber-600 dark:text-white">
                    Enlaces Rápidos
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="/"
                        className="mb-3 inline-block hover:text-amber-600"
                      >
                        Inicio
                      </a>
                    </li>
                    <li>
                      <a
                        href="/fundacion"
                        className="mb-3 inline-block hover:text-amber-600"
                      >
                        Quiénes Somos
                      </a>
                    </li>
                    <li>
                      <a
                        href="/donar"
                        className="mb-3 inline-block hover:text-amber-600"
                      >
                        Donar
                      </a>
                    </li>
                    <li>
                      <a
                        href="/docs"
                        className="mb-3 inline-block hover:text-amber-600"
                      >
                        Cardiopatía
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="text-itemtitle2 mb-9 font-medium text-amber-600 dark:text-white">
                    Soporte
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="/support"
                        className="mb-3 inline-block hover:text-amber-600"
                      >
                        Contáctanos
                      </a>
                    </li>
                    <li>
                      <a
                        href="/objetivos"
                        className="mb-3 inline-block hover:text-amber-600"
                      >
                        Objetivos
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="text-itemtitle2 mb-9 font-medium text-amber-600 dark:text-white">
                    Donaciones
                  </h4>
                  <a
                    href="/donar"
                    className="mb-3 inline-block hover:text-amber-600"
                  >
                    Dona y Regala Latidos.
                  </a>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="text-itemtitle2 mb-9 font-medium text-amber-600 dark:text-white">
                    Síguenos
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://www.instagram.com"
                        className="flex items-center gap-3 hover:text-amber-600"
                      >
                        <FaInstagram size={20} className="text-amber-600" />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com"
                        className="flex items-center gap-3 hover:text-amber-600"
                      >
                        <FaFacebook size={20} className="text-amber-600" />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com"
                        className="flex items-center gap-3 hover:text-amber-600"
                      >
                        <FaTiktok size={20} className="text-amber-600" />
                        TikTok
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:fundacion@coralldominicana.org"
                        className="flex items-center gap-3 hover:text-amber-600"
                      >
                        <MdEmail size={20} className="text-amber-600" />
                        Correo Electrónico
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="border-stroke dark:border-strokedark flex flex-col flex-wrap items-center justify-center gap-5 border-t py-7 lg:flex-row lg:justify-between lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="#" className="hover:text-amber-600">
                    English
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-600">
                    Politicas de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-600">
                    Soporte
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>&copy; {new Date().getFullYear()} CorAll Family Dominicana</p>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
                <li>
                  <svg
                    className="fill-amber-600 transition-all duration-300 hover:fill-amber-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <clipPath id="clip0_48_1499">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    className="fill-amber-600 transition-all duration-300 hover:fill-amber-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <clipPath id="clip0_48_1508">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    className="fill-amber-600 transition-all duration-300 hover:fill-amber-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <clipPath id="clip0_48_1502">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    className="fill-amber-600 transition-all duration-300 hover:fill-amber-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <clipPath id="clip0_48_1505">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export Footer;
