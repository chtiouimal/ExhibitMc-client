import { Form, Input } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined, CheckOutlined } from "@ant-design/icons"
import { prominent } from 'color.js'

const NewModelForm = ({newTrack, setNewTrack, setCurrentForm, setColors}) => {
  const [form] = Form.useForm();

  const handleImgChange = (e) => {
    setNewTrack(prev => ({...prev, coverArt: e.target.value}))
    prominent(e.target.value, { amount: 12 }).then(color => {
      setColors(color)
    });
  }
  
  const onFinish = (values) => {
    // console.log('success:', values);
    setNewTrack({...values, color: ""})
    setCurrentForm(1)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", marginTop: 60}}>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={newTrack}
        layout="vertical" 
        className="mc-form" 
        autoComplete="off"
      >
        <Form.Item name="songName" label="Song title"
          rules={[
            {
              required: true,
              message: "Please enter the song's name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="songArtist" label="Song Artist"
          rules={[
            {
              required: true,
              message: "Please enter the artist's name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="coverArt" label="Song image"
          rules={[
            {
              required: true,
              message: "Please enter the song's image",
            },
          ]}
        >
          <Input onChange={handleImgChange} />
        </Form.Item>
        <Form.Item name="music" label="Song file"
          rules={[
            {
              required: true,
              message: "Please enter the song's file",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
      <button className="mc-btn mc-btn-round mc-btn-primary" style={{marginLeft: "auto"}} onClick={() => form.submit()}><ArrowRightOutlined /></button>
    </div>
  )
}

export default NewModelForm