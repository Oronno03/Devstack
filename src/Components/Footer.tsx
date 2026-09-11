import image from "../assets/logo-text.png";

const Footer = () => {

    const styles = {
        heading: "mb-4 font-bold text-[18px] font-main text-[#0F172A]",
        links: "text-[14px] font-normal font-main text-[#64748B] className={styles.links} cursor-pointer"
    }

  return (
    <>
      <div className="h-1 w-full bg-[#F1F5F9] mt-12 mb-12"></div>
      <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
        <div className="flex flex-col gap-3 items-center md:items-start">
          <img src={image} width={120} alt="" />
          <p className="text-[#64748B] font-main text-[16px]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex pt-3 gap-4">
            <li>
              <a href="" className="text-[#475569] font-semibold font-main">Github</a>
            </li>
            <p>•</p>
            <li>
              <a href="" className="text-[#475569] font-semibold font-main">Twitter</a>
            </li>
            <p>•</p>
            <li>
              <a href="" className="text-[#475569] font-semibold font-main">Linkedin</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col">
          <h1 className={styles.heading}>Product</h1>
          <ul>
            <li>
              <a href="" className={styles.links}>Home</a>
            </li>
            <li>
              <a href="" className={styles.links}>Technologies</a>
            </li>
            <li>
              <a href="" className={styles.links}>Projects</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col">
          <h1 className={styles.heading}>Company</h1>
          <ul>
            <li>
              <a href="" className={styles.links}>About</a>
            </li>
            <li>
              <a href="" className={styles.links}>Contact</a>
            </li>
            <li>
              <a href="" className={styles.links}>Career</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col">
          <h1 className={styles.heading}>Legal</h1>
          <ul>
            <li>
              <a href="" className={styles.links}>Privacy Policy</a>
            </li>
            <li>
              <a href="" className={styles.links}>Terms Of Service</a>
            </li>
          </ul>
        </div>
      </div>
        <div className="h-1 w-full bg-[#F1F5F9] mt-12 mb-12"></div>
        <div className="flex justify-between mb-12">
            <h1 className={styles.links}>© 2026 Dev Stack. All rights reserved.</h1>
            <div className="flex gap-6">
                <p className={styles.links}>Privacy</p>
                <p className={styles.links}>Terms</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
