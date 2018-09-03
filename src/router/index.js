import Vue from 'vue'
import Router from 'vue-router'
import button from "../components/button/button"
import radio from "../components/radio/radio"
import checkbox from "../components/checkbox/checkbox"
import input from "../components/input/input"
import inputnumber from "../components/inputnumber/inputnumber"
import select from "../components/select/select"
import cascader from "../components/cascader/cascader"
import switch1 from "../components/switch/switch"
import slider from "../components/slider/slider"
import timepick from "../components/timepick/timepick"
import datepick from "../components/datepick/datepick"
import datetimepick from "../components/datetimepick/datetimepick"
import upload from "../components/upload/upload"
import rate from "../components/rate/rate"
import transfer from "../components/transfer/transfer"
import form1 from "../components/form/form"
import table1 from "../components/table/table"
import tag from "../components/tag/tag"
import tree from "../components/tree/tree"
import pagination from "../components/pagination/pagination"
import alert from "../components/alert/alert"
import loading from "../components/loading/loading"
import message from "../components/message/message"
import messagebox from "../components/messagebox/messagebox"
import notification from "../components/notification/notification"
import navmenu from "../components/navmenu/navmenu"
import tabs from "../components/tabs/tabs"
import dropdown from "../components/dropdown/dropdown"
import steps from "../components/steps/steps"
import dialog from "../components/dialog/dialog"
import tooltip from "../components/tooltip/tooltip"
import cards from "../components/cards/cards"
import carousel2 from "../components/carousel/carousel"
import collapse2 from "../components/collapse/collapse"
Vue.use(Router)
export default new Router({
  routes: [
    	{
    		path:"/button",
    		component:button
    	},
    	{
    		path:"/radio",
    		component:radio
    	},
    	{
    		path:"/checkbox",
    		component:checkbox
    	},
    	{
    		path:"/input",
    		component:input
    	},
    	{
    		path:"/inputnumber",
    		component:inputnumber
    	},
    	{
    		path:"/select",
    		component:select
    	},
    	{
    		path:"/cascader",
    		component:cascader
    	},
    	{
    		path:"/switch",
    		component:switch1
    	},
    	{
    		path:"/slider",
    		component:slider
    	},
    	{
    		path:"/timepick",
    		component:timepick
    	},
    	{
    		path:"/datepick",
    		component:datepick
    	},
    	{
    		path:"/datetimepick",
    		component:datetimepick
    	},
    	{
    		path:"/upload",
    		component:upload
    	},
    	{
    		path:"/rate",
    		component:rate
    	},
    	{
    		path:"/transfer",
    		component:transfer
    	},
    	{
    		path:"/form",
    		component:form1
    	},
    	{
    		path:"/table",
    		component:table1
    	},
        {
            path:"/tag",
            component:tag
        },
         {
            path:"/tree",
            component:tree
        },
        {
            path:"/pagination",
            component:pagination
        },
        {
            path:"/alert",
            component:alert
        },
        {
            path:"/loading",
            component:loading
        },
        {
            path:"/message",
            component:message
        },
         {
            path:"/messagebox",
            component:messagebox
        },
         {
            path:"/notification",
            component:notification
        },
         {
            path:"/navmenu",
            component:navmenu
        },
         {
            path:"/tabs",
            component:tabs
        },
         {
            path:"/dropdown",
            component:dropdown
        },
         {
            path:"/steps",
            component:steps
        },
         {
            path:"/dialog",
            component:dialog
        },
        {
            path:"/tooltip",
            component:tooltip
        },
        {
            path:"/cards",
            component:cards
        },
         {
            path:"/carousel",
            component:carousel2

        },
        {
            path:"/collapse",
            component:collapse2

        },
    	{
    		path:'*',
    		redirect:"button"
    	},

  ],

})
