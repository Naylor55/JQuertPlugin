using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TreeList.Models;
using Newtonsoft.Json;

namespace TreeList.Controllers
{
    public class LiuTreeController : Controller
    {
        // GET: LiuTree
        public ActionResult Index()
        {
            return View();
        }

        public string GetFirstDept()
        {
            List<DeptModel> depts = new List<DeptModel>() {
                new DeptModel(){
                    id=1,
                    name="集团总部",
                    type="leaf"
                },new DeptModel(){
                id=2,
                name="湖北分公司",
                type="mid"
                }
            };
            string data = JsonConvert.SerializeObject(depts);
            AjaxResultModel ajaxResultModel = new AjaxResultModel()
            {
                code = "200",
                data = data,
                msg = "success"
            };
            string res = JsonConvert.SerializeObject(ajaxResultModel);
            return JsonConvert.SerializeObject(ajaxResultModel);
        }
    }
}