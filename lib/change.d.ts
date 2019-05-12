
interface ChangeOptions {
    operation: 'replace'|'add'|'delete',
    modification: { [k:string]: any|any[] },
}

declare class Change {
    constructor(options: ChangeOptions);
}

export = Change;
