<?php
/**
 * 
 *  微信硬件接入公众号部分接口
 *  步骤 1  授权    2  绑定     3 发送消息
 *  
 *  此类暂时针对一个设备，如果多个再优化
 */
namespace Wechat\Lib; 
use \Common\Lib\Pclass as t;

class WechatHardware
{
    
    private $device_id; //设备id
    private $openid;  
    private $accessToken;
    
    public function __construct($options)
    {
        $this->device_id   = isset($options['device_id']) ? $options['device_id'] : '';  //5804 
        $this->openid      = isset($options['openid']) ? $options['openid'] : '';
        $this->accessToken = isset($options['accessToken']) ? $options['accessToken'] : '';
    }
    
    /**
     * 授权目录
     * device_id,accessToken
     */
    public function authorizeDevice(){
    
        $list[0] = array(
            'id'                  => $this->device_id,
            'mac'                 => '000E0B02C87E',
            'connect_protocol'    => '3',
            'auth_key'            => '',
            'close_strategy'      => '1',
            'conn_strategy'       => '1',
            'crypt_method'        => '0',
            'auth_ver'            => '0',
            'manu_mac_pos'        => '-1',
            'ser_mac_pos'         => '-2'
        );
         
        $param = array(
            'device_num'  => 1,
            'device_list' => $list,
            'op_type'     => '0',
        	'product_id'  => 5804
        );
        
        $url      = 'https://api.weixin.qq.com/device/authorize_device?access_token='.$this->accessToken;
        $curlData = json_encode($param);
        $curl     = new t\Curl();
        $return   = $curl->post($url,$curlData,1);
        
        recordLog($return,'hardware');
    
    }
    
    
    /**
     * 强制用户绑定设备-----用户不会察觉
     * device_id,openid,accessToken
     */
    public function CompelBind(){
        
        $param = array(
            'device_id' => $this->device_id,
            'openid'    => $this->openid
        );
        
        $url      = 'https://api.weixin.qq.com/device/compel_bind?access_token='.$this->accessToken;
        $curlData = json_encode($param);
        $curl     = new t\Curl();
        $return   = $curl->post($url,$curlData,1);
        
        recordLog($return,'hardware');
        
        return $return;
    }
    
    /**
     * 主动发送消息
     * 
     * access_token,device_id,openid
     */
    public function transmsg($key){
        
        $param = array(
            'device_type' => C('WECHAT_ORIGIN_ID'),
            'device_id'   => $this->device_id,
            'open_id'     => $this->openid,
            'content'     => $key
        );
         
        $url      = 'https://api.weixin.qq.com/device/transmsg?access_token='.$this->accessToken;
        $curlData = json_encode($param);
        $curl     = new t\Curl();
        $return   = $curl->post($url,$curlData,1);
        
        recordLog($return,'hardware');
        
        return $return;
        
    }
    
   
   

    
    
    
}
