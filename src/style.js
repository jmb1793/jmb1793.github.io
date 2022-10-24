const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };

  export const form = {
    label: `block mb-2 text-sm font-medium text-secondary dark:text-gray-300`,
    input: `shadow-sm bg-secondary border border-gray-300 text-gray-900 text-sm rounded-lg mb-2
            focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
            dark:focus:border-primary-500 dark:shadow-sm-light`,
    button: `py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-accent my-2
    sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 
    dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`,
  };
  
  export default styles;
  