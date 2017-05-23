/**
 * Created by huangyu on 2017/4/25.
 */
import css from './../css/setCookie.scss';
class SetCookie extends React.Component{
    constructor(){
        super() ;
        this.state = {
            form : {
                userName: {
                    valid: false,
                    value: '',
                    error: ''
                },
                password :{
                    valid: false,
                    value: '',
                    error: ''
                }
            }
        }
    }
    submit(){
        console.log(this.state['form'])
    }
    handleValueChange( field , value ,type = 'string'){
        if (type === 'number') {
            value = +value;
        }

        const newFieldObj = {value, valid: true, error: ''};

        switch (field) {
            case 'userName': {
                if (value.length >= 5) {
                    newFieldObj.error = '用户名最多4个字符';
                    newFieldObj.valid = false;
                } else if (value.length === 0) {
                    newFieldObj.error = '请输入用户名';
                    newFieldObj.valid = false;
                }
                break;
            }
            case 'password': {
                if (value > 100 || value <= 0) {
                    newFieldObj.error = '请输入1~100之间的数字';
                    newFieldObj.valid = false;
                }
                break;
            }
        }

        let state = this.state;

        state.form[field] = newFieldObj;

        this.setState(state);

    }
    //去除左右空格
    trim (str){
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
    render(){
        const {form : {userName, password}} = this.state;
        return(
            <form action="post">
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="tableHead">
                                用户名：
                            </td>
                            <td>
                                <input type="text"  name='userName' id='userName' value={userName.value} onChange={ (e) => this.handleValueChange('userName',e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td className="tableHead">
                                密码：
                            </td>
                            <td>
                                <input type="text" name="password" id="password" value={password.value} onChange={ (e) => this.handleValueChange('password' , e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="button" onClick={ () => this.submit()}>save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

ReactDOM.render(
    <SetCookie/>,
    document.getElementById('app')
);