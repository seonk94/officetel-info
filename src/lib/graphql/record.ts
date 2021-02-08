import gql from 'graphql-tag';
// eslint-disable-next-line import/named
import { SemanticICONS } from 'semantic-ui-react';

export type Record = {
    _id: number;
    coordinate: number[];
    title: string;
    content: string;
    iconType: SemanticICONS;
    date: string;
    userId: number;
};

export const GET_RECORDS = gql`
  query AllRecords {
    allRecords {
    data {
      title
      content
      iconType
      date
      userId
      coordinate
      }
    }
  }
`;

export const GET_RECORDS_BY_USERID = gql`
  query RecordsByUserId($userId: ID) {
    recordsByUserId(userId: $userId) {
      data {
        title
        content
        iconType
        date
        userId
        coordinate
      }
    }
  }
`;

export const CREATE_RECORD = gql`
  mutation CreateRecord(
    $title: String!,
    $content: String!,
    $iconType: String!,
    $date: String!,
    $userId: ID!,
    $coordinate: [Int]!
  ) {
    createRecord(
      data: {
        title: $title,
        content: $content,
        iconType: $iconType,
        date: $date,
        userId: $userId,
        coordinate: $coordinate
      }
    ) {
      _id
      title
      content
      iconType
      date
      coordinate
      userId
    }
  }
`;

export type CreateRecordResponse = {
  createRecord: {
    _id: number;
    title: string;
    content: string;
    iconType: string;
    date: string;
    coordinate: number[];
    userId: number;
  };
};