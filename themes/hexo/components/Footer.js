import { siteConfig } from '@/lib/config'
import dynamic from 'next/dynamic'
const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear
  const Fish = dynamic(() => {return import('@/components/Fish')},{ ssr: false })
  return (
    <footer
      className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm p-6'
    >
      {/* <DarkModeButton/> */}
      <div style={{ position: 'absolute', width: "100%" }}>
      {siteConfig('BEI_AN') && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{siteConfig('BEI_AN')}</a><br/></>}
      <i className='fas fa-copyright' /> {`${copyrightDate}`} <span><i className='mx-1 animate-pulse fas fa-heart'/> <a href={siteConfig('LINK')} className='underline font-bold  dark:text-gray-300 '>{siteConfig('AUTHOR')}</a>.<br/>
      <i className='fas fa-shield-alt'/><a href="https://icp.gov.moe/?keyword=20240801" target="_blank">萌ICP备20240801号</a> 
      <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye'/><span className='px-1 busuanzi_value_site_pv'> </span>  </span>
      <span className='pl-2 hidden busuanzi_container_site_uv'>
        <i className='fas fa-users'/> <span className='px-1 busuanzi_value_site_uv'> </span> </span>
        <div style={{ position: 'relative', width: "100%", zIndex: 100 }}>
        <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>{title} {siteConfig('BIO') && <>|</>} {siteConfig('BIO')}</h1></span><br/>
        </div>
        </div>
        <Fish/>
    </footer>
                                                                                
  )
}
export default Footer
