export enum ActionMenuEnum {
    View,
    Edit,
    Delete
};

export const ActionMenu = [
    {type: ActionMenuEnum.View, label: 'View', icon: 'desktop_windows'},
    {type: ActionMenuEnum.Edit, label: 'Edit', icon: 'edit'},
    {type: ActionMenuEnum.Delete, label: 'Delete', icon: 'delete_outline'}
];