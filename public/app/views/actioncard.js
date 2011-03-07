ToolbarDemo.views.Actioncard = Ext.extend(Ext.Panel, {
    title: "action",
    iconCls: "action",
    dockedItems: [{
        xtype: 'toolbar',
        title: "Don't press the red button!"
    },{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'light',
        items: [
            {
				text: 'one',
				ui: 'back'
			},
			{xtype: 'spacer'},
            {
				iconMask: true,
				iconCls: 'home',
				ui: 'plain'
			},
            {
				iconMask: true,
				iconCls: 'search',
				ui: 'plain'
			},
            {
				iconMask: true,
				iconCls: 'settings',
				ui: 'plain'
			},
			{xtype: 'spacer'},
            {
				text: 'three',
				ui: 'action'
			},
        ]
    }],
});
