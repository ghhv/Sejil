// Copyright (C) 2017 Alaa Masoud
// See the LICENSE file in the project root for more information.

import ILogEntryProperty from './ILogEntryProperty';

export default interface ILogEntry {
    id: string;
    message: string;
    messageTemplate: string;
    level: string;
    timestamp: string;
    exception?: string;
    properties: ILogEntryProperty[];
}
