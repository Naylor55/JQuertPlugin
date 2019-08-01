/********************************************************************
* Copyright (c) 2019 ALL Rights Reserved.
* CLR版本：4.0.30319.42000
* 机器名称：NAYLOR
* 公司名称：
* 命名空间：TreeList.Models
* 文件名： AjaxResultModel
* 版本号： V1.0.0.0
* 唯一标识： 0c81c57e-febc-4a44-8545-b04e3784e30c
* 当前的用户域： NAYLOR
* 创建人： Cnayl
* 电子邮箱： cnaylor@163.com
* 创建时间： 2019/5/21 15:59:16

* 描述：
*
* ==================================================================
* 修改标记
* 修改时间： 2019/5/21 15:59:16
* 修改人： Cnayl
* 版本号： 
* 描述：
*
*
********************************************************************/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TreeList.Models
{
    public class AjaxResultModel
    {
        public string code { get; set; }
        public string data { get; set; }
        public string msg { get; set; }
    }
}