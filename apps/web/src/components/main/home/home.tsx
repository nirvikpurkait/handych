import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Image } from "@unpic/react";
import { platformMobileNo } from "@repo/utils/const";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Shield,
  CheckCircle,
  DollarSign,
  Check,
  X,
  ChevronRight,
} from "lucide-react";
import { offeredServices, upcomingServices, whyTrustHandych } from "@repo/data";

export function HeroSection({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        `relative isolate grid overflow-clip md:py-20 lg:grid-cols-2`,
        `px-4 sm:px-10 md:px-20 lg:px-24`,
        className,
      )}
      id=""
      {...props}
    >
      <div className={cn(`absolute inset-0 -z-1`)} aria-hidden data-bg-image>
        <Image
          src="/images/home-hero-lg.jpg"
          alt=""
          layout="fullWidth"
          className={cn(
            `h-full w-full origin-left mask-[linear-gradient(to_right,transparent_40%,black_60%)] object-cover opacity-70`,
          )}
        />
      </div>
      <div className={cn(`space-y-4 pb-10 md:space-y-6 lg:space-y-8`)}>
        <p
          className={cn(
            `text-secondary-500 border-secondary-500 inline-block rounded-full border px-4 text-sm md:text-base`,
          )}
        >
          Professional Home Cleaning Services
        </p>

        <h1 className={cn(`text-2xl font-bold md:text-4xl lg:text-6xl`)}>
          <span>
            Caring For <br /> Better{" "}
          </span>
          <span className={cn(`text-secondary-500`)}>Living</span>
        </h1>

        <p className={cn(`max-w-80 lg:max-w-140`)}>
          HandyCh brings professional cleaning services to your home with care,
          quality and trust. We make your space cleaner, healthier and more
          comfortable.
        </p>

        <div
          className={cn(`flex flex-col gap-2 pt-4 md:flex-row md:pt-6 lg:pt-8`)}
        >
          <a
            href={`https://wa.me/${platformMobileNo}`}
            target="_blank"
            className={cn(
              "dark:border-secondary-500 dark:bg-secondary-500 dark:text-primary-500 flex max-w-max items-center gap-2 rounded-md border px-4 py-3 text-sm font-semibold transition-colors",
            )}
          >
            Book On Whatsapp
            <FaWhatsapp className={cn("size-5")} />
          </a>
          <Link
            to={`/`}
            hash={"services"}
            className={cn(
              "flex max-w-max items-center gap-2 rounded-md border px-4 py-3 text-sm font-semibold transition-colors",
            )}
          >
            Explore Services
            <ArrowRight className={cn("text-secondary-500 size-5")} />
          </Link>
        </div>

        <div className={cn(`flex flex-wrap gap-4 pt-4 lg:pt-6`)}>
          <span className={cn(`flex items-center gap-1 text-sm`)}>
            <span>
              <Shield className={cn(`text-secondary-500 size-4`)} />
            </span>
            <span>Verified professional</span>
          </span>
          <span className={cn(`flex items-center gap-1 text-sm`)}>
            <span>
              <DollarSign className={cn(`text-secondary-500 size-4`)} />
            </span>
            <span>Affordable Pricing</span>
          </span>
          <span className={cn(`flex items-center gap-1 text-sm`)}>
            <span>
              <CheckCircle className={cn(`text-secondary-500 size-4`)} />
            </span>
            <span>Satisfaction Guaranteed</span>
          </span>
        </div>
      </div>
      <div
        aria-hidden
        data-placeholder
        className={cn(
          `-mx-4 max-md:-translate-y-30 sm:-mx-10 md:-mx-20 lg:-mx-24`,
        )}
      >
        {/* <Image
          src="/images/home-hero-sm.jpg"
          alt=""
          layout="fullWidth"
          className={cn(
            `w-full mask-[linear-gradient(to_bottom,transparent_10%,black_20%)] md:hidden`,
          )}
        /> */}
      </div>
    </section>
  );
}

export function OurService({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        `overflow-clip py-10 md:py-20`,
        `bg-primary-50 text-primary-500`,
        `px-4 sm:px-10 md:px-20 lg:px-24`,
        className,
      )}
      id="services"
      {...props}
    >
      <p
        className={cn(
          `text-secondary-500 text-center text-base uppercase md:text-lg`,
        )}
      >
        Our Service
      </p>
      <div
        className={cn(`flex flex-wrap items-center justify-center gap-4 pb-10`)}
      >
        <div className={cn(`h-20 w-40 bg-red-300 lg:h-30 lg:w-60`)}>
          <Image
            src={"/images/our-service-main-image.jpg"}
            alt=""
            layout="fullWidth"
            className={cn(`inset-0 h-full w-full object-cover`)}
          />
        </div>
        <div>
          <h2 className={cn(`text-xl font-bold md:text-2xl lg:text-4xl`)}>
            <span>Care for Your Home, </span>
            <br />
            <span className={cn(`text-secondary-500`)}>We've Got You</span>
          </h2>

          <p>
            <span>Thoughtful cleaing solution for every place you live in</span>
          </p>
        </div>
      </div>

      {/* <div className={cn(`pb-10`)}>
        <p
          className={cn(
            `text-secondary-500 text-center text-base uppercase md:text-lg`,
          )}
        >
          Our Service
        </p>

        <h2
          className={cn(
            `text-center text-xl font-bold md:text-2xl lg:text-4xl`,
          )}
        >
          <span className={cn(`text-primary-500`)}>Care for Your Home, </span>
          <span className={cn(`text-secondary-500`)}>We've Got You</span>
        </h2>

        <p className={cn(`pt-4 text-center`)}>
          Thoughtful cleaing solution for every place you live in
        </p>

        <div className={cn(`pt-6`)}>
          <div
            className={cn(`bg-secondary-500 m-auto h-0.5 w-full max-w-20`)}
          />
        </div>
      </div> */}

      <div
        className={cn(`grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4`)}
      >
        {/* <div className={cn(`relative h-full w-full`)}>
          <Image
            src="/images/featured-services.jpg"
            alt="our-service-main-image"
            layout="fullWidth"
            className={cn(`absolute inset-0 h-full w-full`)}
          />
        </div> */}

        {offeredServices.map(
          (
            {
              chargesStartsFrom,
              coveredServices,
              notCoveredServices,
              serviceName,
              imageSource,
              iconSource,
            },
            offeredServicesIdx,
          ) => {
            return (
              <div
                key={serviceName}
                className={cn(`overflow-clip rounded-2xl shadow`)}
              >
                <div
                  className={cn(
                    `bg-primary-500 text-primary-50 flex items-start gap-3 px-4 py-6`,
                  )}
                >
                  <div className={cn(`aspect-square size-10 bg-red-300`)}>
                    <Image
                      src={iconSource}
                      alt=""
                      layout="fullWidth"
                      className={cn(`w-full object-cover`)}
                    />
                  </div>
                  <div className={cn(`grow`)}>
                    <div className={cn(`text-xl font-semibold md:text-2xl`)}>
                      {serviceName}
                    </div>
                    <div>
                      <span className={cn(`text-primary-50/80 text-sm`)}>
                        Starting from{" "}
                      </span>
                      <br />
                      <span
                        className={cn(
                          `text-secondary-500 text-2xl font-semibold md:text-4xl`,
                        )}
                      >
                        ₹ {chargesStartsFrom}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={cn(`aspect-video bg-red-300`)}>
                  <Image
                    src={imageSource}
                    alt=""
                    layout="fullWidth"
                    className={cn(`w-full object-cover`)}
                  />
                </div>
                <div className={cn(`px-4 py-4`)}>
                  {offeredServicesIdx === 2 && (
                    <div className={cn(`flex gap-1 *:basis-1/2`)}>
                      <div>
                        <div
                          className={cn(
                            `flex w-full items-center justify-center rounded-md bg-green-500/10 px-4 py-1`,
                          )}
                        >
                          Basic clean
                        </div>
                        {coveredServices.map((service) => {
                          if (!service.startsWith("Basic-clean")) return null;
                          return (
                            <li
                              key={service}
                              className={cn(`flex items-start gap-1`)}
                            >
                              <span className={cn(`mt-1.5 inline-block`)}>
                                <Check
                                  className={cn(
                                    `bg-primary-500 text-primary-50 size-4 rounded-full p-0.5`,
                                  )}
                                />
                              </span>
                              <span>{service.split("Basic-clean ")[1]}</span>
                            </li>
                          );
                        })}
                      </div>
                      <div>
                        <div
                          className={cn(
                            `flex w-full items-center justify-center rounded-md bg-red-500/10 px-4 py-1`,
                          )}
                        >
                          Deep clean
                        </div>
                        {coveredServices.map((service) => {
                          if (!service.startsWith("Deep-clean")) return null;
                          return (
                            <li
                              key={service}
                              className={cn(`flex items-start gap-1`)}
                            >
                              <span className={cn(`mt-1.5 inline-block`)}>
                                <Check
                                  className={cn(
                                    `bg-primary-500 text-primary-50 size-4 rounded-full p-0.5`,
                                  )}
                                />
                              </span>
                              <span>{service.split("Deep-clean ")[1]}</span>
                            </li>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {offeredServicesIdx !== 2 &&
                    coveredServices.map((service) => {
                      return (
                        <li
                          key={service}
                          className={cn(`flex items-start gap-1`)}
                        >
                          <span className={cn(`mt-1.5 inline-block`)}>
                            <Check
                              className={cn(
                                `bg-primary-500 text-primary-50 size-4 rounded-full p-0.5`,
                              )}
                            />
                          </span>
                          <span>{service}</span>
                        </li>
                      );
                    })}
                  {notCoveredServices.map((service) => {
                    return (
                      <li
                        key={service}
                        className={cn(`flex items-start gap-1`)}
                      >
                        <span className={cn(`mt-1.5 inline-block`)}>
                          <X
                            className={cn(
                              `bg-primary-500 text-primary-50 size-4 rounded-full p-0.5`,
                            )}
                          />
                        </span>
                        <span>{service}</span>
                      </li>
                    );
                  })}
                </div>
                <div className={cn(`px-4 pb-6`)}>
                  <a
                    href={`/`}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-md border px-4 py-3 text-sm font-semibold transition-colors",
                    )}
                  >
                    Book on Whatsapp
                    <FaWhatsapp className={cn("size-5")} />
                  </a>
                </div>
              </div>
            );
          },
        )}

        <div className={cn(`px-4 py-6 shadow`)}>
          <div className={cn(`flex gap-2`)}>
            <div
              className={cn(
                `bg bg-primary-500 aspect-square size-14 overflow-clip rounded-lg`,
              )}
            >
              <Image
                src={"/images/more-care-coming-soon-icon.jpg"}
                layout="fullWidth"
                alt=""
              />
            </div>
            <div className={cn(`text-xl font-bold`)}>
              More Care <br /> Coming Soon
            </div>
          </div>
          <ul className={cn(`pt-6`)}>
            {upcomingServices.map(({ serviceName }) => {
              return (
                <li key={serviceName} className={cn(`flex flex-col`)}>
                  <span className={cn(`flex items-center gap-2 text-sm`)}>
                    <span>
                      <ChevronRight className={cn(`size-3`)} />
                    </span>
                    <span>{serviceName}</span>
                  </span>
                </li>
              );
            })}
          </ul>
          <div className={cn(`mt-10 aspect-9/10 w-full`)}>
            <Image
              src={"/images/more-care-coming-soon.jpg"}
              alt=""
              layout="fullWidth"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyTrustHanych({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        `py-10 md:py-20`,
        `px-4 sm:px-10 md:px-20 lg:px-24`,
        className,
      )}
      id="why-handych"
      {...props}
    >
      <div>
        <h2
          className={cn(
            `text-center text-xl font-bold md:text-2xl lg:text-4xl`,
          )}
        >
          <span>Why Families Trust </span>
          <span className={cn(`text-secondary-500`)}>HandyCh</span>
        </h2>

        <p className={cn(`pt-4 text-center`)}>
          Every visit is built on care, quality, and respect for your home.
        </p>

        <div className={cn(`pt-6`)}>
          <div
            className={cn(`bg-secondary-500 m-auto h-0.5 w-full max-w-20`)}
          />
        </div>
      </div>

      <div className={cn(`flex w-full flex-wrap gap-4 pt-10`)}>
        <div className={cn(`relative min-w-60 flex-2`)}>
          <Image
            src="/images/why-us-main-image.jpg"
            alt="our-service-main-image"
            layout="fullWidth"
          />
        </div>
        {whyTrustHandych.map(({ title, description, iconSource }) => {
          return (
            <div
              key={title}
              className={cn(
                `flex min-w-30 flex-1 flex-col items-center justify-center rounded-md border border-white/10 bg-[#001332] px-2 py-8`,
              )}
            >
              <div className={cn(`relative size-10 bg-red-300`)}>
                <Image src={iconSource} layout="fullWidth" alt="" />
              </div>
              <h3 className={cn(`pt-2 text-center text-sm font-semibold`)}>
                {title}
              </h3>
              <div className={cn(`p-2`)}>
                <div className={cn(`bg-secondary-500 h-0.5 w-6`)}></div>
              </div>
              <p className={cn(`text-center text-sm`)}>{description}</p>
            </div>
          );
        })}
      </div>

      <div
        className={cn(
          `m-auto mt-10 flex max-w-max flex-wrap items-center gap-3 rounded-md border border-white/10 bg-white/3 px-4 py-2`,
        )}
      >
        <div className={cn(`size-10 bg-red-300`)}>
          <Image
            src={"/images/why-trust-us/bottom-icon.jpg"}
            alt=""
            layout="fullWidth"
            className={cn(`inset-0 h-full w-full object-cover`)}
          />
        </div>
        <p>
          <span>We don't just clean homes, </span>
          <span className={cn(`text-secondary-500`)}>we care </span>
          <span>for them </span>
          <span className={cn(`text-secondary-500`)}>like our own.</span>
        </p>
        <p className={cn(`font-brand-secondary text-2xl`)}>
          <span>- That's the </span>
          <span className={cn(`text-secondary-500`)}>HandyCh </span>
          <span>promise</span>
        </p>
      </div>
    </section>
  );
}

export function OurFounders({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        `py-10 md:py-20`,
        `bg-primary-50 text-primary-500`,
        `px-4 sm:px-10 md:px-20 lg:px-24`,
      )}
      id="about"
      {...props}
    >
      <div className={cn(`space-y-4`)}>
        <p className={cn(`text-center uppercase`)}>Our Founders</p>
        <h2
          className={cn(
            `text-center text-xl font-bold md:text-2xl lg:text-4xl`,
          )}
        >
          <span>The People Behind </span>
          <span className={cn(`text-secondary-500`)}>HandyCh</span>
        </h2>

        <p className={cn(`text-center text-sm md:text-base`)}>
          Driven by passion, experience and the vision to create cleaner, better
          living for everyone.
        </p>
      </div>

      <div className={cn(`mt-10 grid gap-4 xl:grid-cols-2`)}>
        <div className={cn(`grid grid-cols-1 gap-4 xl:grid-cols-2`)}>
          <div
            className={cn(
              `relative h-full overflow-clip rounded-2xl max-xl:aspect-video`,
            )}
          >
            <Image
              src="/images/founder-sourav.jpg"
              alt="our-service-main-image"
              layout="fullWidth"
              className={cn(
                `absolute h-full w-full overflow-clip object-cover`,
              )}
            />
          </div>
          <div className={cn(`space-y-1`)}>
            <h2 className={cn(`text-2xl font-bold`)}>Sourav Ghosh</h2>
            <p className={cn(`text-secondary-500 font-semibold`)}>Founder</p>
            <div className={cn(`bg-secondary-500 h-0.5 w-10`)} />
            <div
              className={cn(
                `relative space-y-3 pt-8 pl-10 text-sm md:text-base`,
              )}
            >
              <span
                className={cn(
                  `text-secondary-500 absolute top-0 left-0 -translate-x-4 font-mono text-5xl tracking-[-20px] md:text-7xl`,
                )}
              >
                &lsquo;&lsquo;
              </span>
              <p>
                With years of experience in the hospitality industry across
                India and international cruise lines, I have built my career on
                exceptional service, meticulous attention to detail, and
                world-class cleanliness standards.
              </p>
              <p>
                As a Cruise Butler managing luxury suites and personalized guest
                experiences, I learned that true cleanliness is about creating
                comfort, trust, and peace of mind-values that define every
                service we deliver at Handych.
              </p>
            </div>
          </div>
        </div>

        <div className={cn(`grid grid-cols-1 gap-4 xl:grid-cols-2`)}>
          <div
            className={cn(
              `relative h-full overflow-clip rounded-2xl max-xl:aspect-video`,
            )}
          >
            <Image
              src="/images/founder-rana.jpg"
              alt="our-service-main-image"
              layout="fullWidth"
              className={cn(
                `absolute h-full w-full overflow-clip object-cover`,
              )}
            />
          </div>
          <div className={cn(`space-y-1`)}>
            <h2 className={cn(`text-2xl font-bold`)}>Rana Sarkar</h2>
            <p className={cn(`text-secondary-500 font-semibold`)}>Co-Founder</p>
            <div className={cn(`bg-secondary-500 h-0.5 w-10`)} />
            <div
              className={cn(
                `relative space-y-3 pt-8 pl-10 text-sm md:text-base`,
              )}
            >
              <span
                className={cn(
                  `text-secondary-500 absolute top-0 left-0 -translate-x-4 font-mono text-5xl tracking-[-20px] md:text-7xl`,
                )}
              >
                &lsquo;&lsquo;
              </span>
              <p>
                I enjoy understanding how people live and what small challenges
                they face every day.
              </p>
              <p>
                At HandyCh, I spend time talking with residents, learning from
                their experiences, and making sure every service we introduce
                solves a real problem-not just an assumed one.
              </p>
              <p>My belief is simple:</p>
              <p>The best services are built by listening first.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OurPurpose({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        `py-10 md:py-20`,
        `px-4 sm:px-10 md:px-20 lg:px-24`,
        className,
      )}
      id="our-purpose"
      {...props}
    >
      <div className={cn(`flex flex-wrap items-center justify-center gap-4`)}>
        <div className={cn(`h-20 w-40 bg-red-300 lg:h-30 lg:w-60`)}>
          <Image
            src={"/images/our-purpose/our-purpose-section-mascot.jpg"}
            alt=""
            layout="fullWidth"
            className={cn(`inset-0 h-full w-full object-cover`)}
          />
        </div>
        <div>
          <h2 className={cn(`text-xl font-bold md:text-2xl lg:text-4xl`)}>
            <span>Our purpose, </span>
            <br />
            <span className={cn(`text-secondary-500`)}>
              Your peace of mind.
            </span>
          </h2>

          <p>
            <span>We clean homes, We care for people, </span>
            <span className={cn(`text-secondary-500`)}>We build trust.</span>
          </p>
        </div>
      </div>

      <div className={cn(`mt-10 flex flex-wrap justify-center gap-4`)}>
        <div
          className={cn(
            `basis-100 space-y-2 rounded-xl border border-white/10 bg-white/3 p-4`,
          )}
        >
          <div className={cn(`flex items-center gap-6`)}>
            <div className={cn(`size-16 bg-red-300`)}>
              <Image
                src={
                  "/images/our-purpose/our-purpose-section-image-our-vision-icon.jpg"
                }
                alt=""
                layout="fullWidth"
                className={cn(`inset-0 h-full w-full object-cover`)}
              />
            </div>
            <div>
              <h3 className={cn(`text-xl font-semibold md:text-2xl`)}>
                Our Vission
              </h3>
              <div className={cn(`bg-secondary-500 mt-2 h-0.5 w-10`)} />
            </div>
          </div>
          <div>
            <p>
              To become India's most trsted home service brand, by setting new
              standards in quality, professionalism and customer satisfaction,
              starting from Kalyani and expanding across the country.
            </p>
          </div>
          <div className={cn(`aspect-video w-full bg-red-300`)}>
            <Image
              src={
                "/images/our-purpose/our-purpose-section-image-our-mission.jpg"
              }
              alt=""
              layout="fullWidth"
              className={cn(`inset-0 h-full w-full object-cover`)}
            />
          </div>
        </div>
        <div
          className={cn(
            `basis-100 space-y-2 rounded-xl border border-white/10 bg-white/3 p-4`,
          )}
        >
          <div className={cn(`flex items-center gap-6`)}>
            <div className={cn(`size-16 bg-red-300`)}>
              <Image
                src={
                  "/images/our-purpose/our-purpose-section-image-our-vision-mission.jpg"
                }
                alt=""
                layout="fullWidth"
                className={cn(`inset-0 h-full w-full object-cover`)}
              />
            </div>
            <div>
              <h3 className={cn(`text-xl font-semibold md:text-2xl`)}>
                Our Mission
              </h3>
              <div className={cn(`bg-secondary-500 mt-2 h-0.5 w-10`)} />
            </div>
          </div>
          <div>
            <p>
              To become India's most trsted home service brand, by setting new
              standards in quality, professionalism and customer satisfaction,
              starting from Kalyani and expanding across the country.
            </p>
          </div>
          <div className={cn(`aspect-video w-full bg-red-300`)}>
            <Image
              src={
                "/images/our-purpose/our-purpose-section-image-our-vision.jpg"
              }
              alt=""
              layout="fullWidth"
              className={cn(`inset-0 h-full w-full object-cover`)}
            />
          </div>
        </div>
        <div
          className={cn(
            `basis-100 space-y-2 rounded-xl border border-white/10 bg-white/3 p-4`,
          )}
        >
          <div className={cn(`flex items-center gap-6`)}>
            <div className={cn(`size-16 bg-red-300`)}>
              <Image
                src={
                  "/images/our-purpose/our-purpose-section-image-our-promise.jpg"
                }
                alt=""
                layout="fullWidth"
                className={cn(`inset-0 h-full w-full object-cover`)}
              />
            </div>
            <div>
              <h3 className={cn(`text-xl font-semibold md:text-2xl`)}>
                Our Promise
              </h3>
              <div className={cn(`bg-secondary-500 mt-2 h-0.5 w-10`)} />
            </div>
          </div>
          <div>
            <ul
              className={cn(
                `*:border-b *:border-b-white/20 *:py-3 *:last:border-0`,
              )}
            >
              <li className={cn(`flex items-start gap-2 text-sm`)}>
                <span className={cn(`mt-0.5 inline-block`)}>
                  <CheckCircle className={cn(`text-secondary-500 size-4`)} />
                </span>
                <span className={cn(``)}>
                  We will treat your home with care and respect .
                </span>
              </li>
              <li className={cn(`flex items-start gap-2 text-sm`)}>
                <span className={cn(`mt-0.5 inline-block`)}>
                  <CheckCircle className={cn(`text-secondary-500 size-4`)} />
                </span>
                <span className={cn(``)}>
                  We will be honest, transparent and fair in everything we do.
                </span>
              </li>
              <li className={cn(`flex items-start gap-2 text-sm`)}>
                <span className={cn(`mt-0.5 inline-block`)}>
                  <CheckCircle className={cn(`text-secondary-500 size-4`)} />
                </span>
                <span className={cn(``)}>
                  Who will deliver quality service every single time?
                </span>
              </li>
              <li className={cn(`flex items-start gap-2 text-sm`)}>
                <span className={cn(`mt-0.5 inline-block`)}>
                  <CheckCircle className={cn(`text-secondary-500 size-4`)} />
                </span>
                <span className={cn(``)}>
                  We will listen learn and keep improving for you.
                </span>
              </li>
              <li className={cn(`flex items-start gap-2 text-sm`)}>
                <span className={cn(`mt-0.5 inline-block`)}>
                  <CheckCircle className={cn(`text-secondary-500 size-4`)} />
                </span>
                <span className={cn(``)}>
                  Who will be there when you need us?
                </span>
              </li>
            </ul>
          </div>
          <div
            className={cn(
              `font-brand-secondary text-secondary-500 text-center`,
            )}
          >
            <p> Your trust is our biggest responsibility</p>
          </div>
        </div>
      </div>
    </section>
  );
}
