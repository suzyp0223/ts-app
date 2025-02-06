import React, {useState} from 'react'
import { Button, DatePicker, message, Space, version, Alert, Flex, Tooltip } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

export default function Antd() {
  const [date, setDate] = useState(null);

  const handleChange = (value) => {
    message.info(`선택된 날짜: ${value ? value.format('YYYY-MM-DD'): 'None'}`)
    setDate(value);
  };

  React.useEffect(()=>{
  console.log('date', date)
  },[date])

  return (
    <div>
      <h1>antd version: {version}</h1>
        <Space>
         <DatePicker onChange={handleChange}/>
         <Button type='primary'>Primary Button</Button>
         < div>Selected date: {date ? date.format('YYYY-MM-DD') : 'None'}</div>
         <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="primary" shape="circle">
        A
      </Button>
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
      <Flex wrap gap="small">
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
     </Flex>
    <Flex wrap gap="small">
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
      <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="dashed" icon={<SearchOutlined />}>
        Search
      </Button>
      <Button icon={<SearchOutlined />} href="https://www.google.com" target="_blank" />
     </Flex>
      </Space>
      <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />


    </div>
  )
}
