import { Form, Input } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons"
import { prominent } from 'color.js'

const NewModelForm = ({newTrack, setNewTrack, setCurrentForm, setColors}) => {
  const [form] = Form.useForm();

  const handleImgChange = (e) => {
    setNewTrack(prev => ({...prev, coverArt: e.target.value}))
    prominent(e.target.value, { amount: 12 }).then(color => {
      setColors(color)
    });
  }
  const handleGoBack = () => {
    setNewTrack(prev => ({...prev, category: null}))
    setCurrentForm(0);
  }
  
  const onFinish = (values) => {
    setNewTrack({...newTrack,...values})
    setCurrentForm(2)
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
        {
          newTrack.category === 0 ?          
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
          : null
        }
        {
          newTrack.category === 3 ?          
            <Form.Item name="video" label="video file"
              rules={[
                {
                  required: true,
                  message: "Please enter the video's file",
                },
              ]}
            >
              <Input />
            </Form.Item>
          : null
        }
      </Form>
      <div className="mc-form-actions">
        <button className="mc-btn mc-btn-round mc-btn-outlined" onClick={handleGoBack}><ArrowLeftOutlined /></button>
        <button className="mc-btn mc-btn-round mc-btn-primary" onClick={() => form.submit()}><ArrowRightOutlined /></button>
      </div>
    </div>
  )
}

export default NewModelForm