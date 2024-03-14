import { IconArrowRight } from '@arco-design/web-react/icon'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>主页</h1>
      <div onClick={() => navigate('/setting')}>
        前往设置页
        <IconArrowRight />
      </div>
    </div>
  )
}
