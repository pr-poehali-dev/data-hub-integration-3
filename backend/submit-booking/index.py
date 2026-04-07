import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Принимает заявку на пробное занятие и сохраняет в базу данных."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    parent_name = body.get('parent_name', '').strip()
    phone = body.get('phone', '').strip()
    child_name = body.get('child_name', '').strip()
    child_age = body.get('child_age')

    if not parent_name or not phone or not child_name or not child_age:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Заполните все обязательные поля'})
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        'INSERT INTO bookings (parent_name, phone, child_name, child_age) VALUES (%s, %s, %s, %s)',
        (parent_name, phone, child_name, int(child_age))
    )
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'message': 'Заявка принята!'})
    }
